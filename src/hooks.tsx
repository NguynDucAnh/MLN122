import { useState, useEffect, useRef, ReactNode } from 'react';

/* ============================
   useInView — fires once when element enters viewport
   ============================ */
export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, isInView };
}

/* ============================
   useTypewriter — character reveal
   The single orchestrated animation moment in the hero.
   ============================ */
export function useTypewriter(text: string, speed = 40, startDelay = 0, trigger = true) {
  const [displayed, setDisplayed] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!trigger) { return; }
    setDisplayed('');
    setIsDone(false);
    let i = 0;
    const delay = setTimeout(() => {
      const tick = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(tick);
          setIsDone(true);
        }
      }, speed);
      return () => clearInterval(tick);
    }, startDelay);
    return () => clearTimeout(delay);
  }, [text, speed, startDelay, trigger]);

  return { displayed, isDone };
}

/* ============================
   InkSettle — single scroll-reveal wrapper
   Fades up + deblurs, like ink settling into paper.
   Delay param staggers siblings.
   ============================ */
export function InkSettle({
  children,
  className = '',
  delay = 0,
  tag: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  tag?: keyof JSX.IntrinsicElements;
}) {
  const { ref, isInView } = useInView();

  return (
    <Tag
      ref={ref as any}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(16px)',
        filter: isInView ? 'blur(0)' : 'blur(2px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, filter 0.6s ease ${delay}ms`,
        willChange: isInView ? 'auto' : 'opacity, transform, filter',
      }}
    >
      {children}
    </Tag>
  );
}
