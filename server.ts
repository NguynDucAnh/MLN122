import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for chat assistant
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Format conversation history for chats.create
      const formattedHistory = (history || []).map((msg: any) => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [{ text: msg.parts[0]?.text || '' }]
      }));

      const chat = ai.chats.create({
        model: "gemini-2.0-flash",
        config: {
          systemInstruction: "Bạn là một Trợ lý Học tập và Giảng viên ảo thông thái, chuyên sâu về môn Kinh tế chính trị Mác - Lênin tại các trường đại học Việt Nam. Nhiệm vụ của bạn là giải đáp các câu hỏi học tập của sinh viên một cách chính xác, mạch lạc, dễ hiểu, giàu ví dụ thực tế và bám sát giáo trình chuẩn của Bộ Giáo dục và Đào tạo. Hãy luôn duy trì thái độ thân thiện, khích lệ sinh viên học tập tốt, đồng thời trích dẫn khoa học và dùng từ ngữ chuẩn mực tiếng Việt học thuật. Nếu sinh viên hỏi về Cạnh tranh & Độc quyền (Chương 4), hãy trích dẫn các liên hệ thực tiễn sinh động của thế kỷ 21 (như độc quyền công nghệ Google/Meta, chuyển giá né thuế của các công ty đa quốc gia, sở hữu trí tuệ chip ASML/Qualcomm, v.v.) để làm rõ lý thuyết của Lênin.",
          temperature: 0.7,
        },
        history: formattedHistory
      });

      const response = await chat.sendMessage({ message });
      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
