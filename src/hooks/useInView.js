import { useCallback, useEffect, useRef, useState } from "react";

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(Boolean(options.initial));
  const [hasBeenInView, setHasBeenInView] = useState(Boolean(options.initial));

  const reveal = useCallback(() => {
    setIsInView(true);
    setHasBeenInView(true);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.boundingClientRect.width === 0 && entry.boundingClientRect.height === 0) {
          return;
        }
        const visible = entry.isIntersecting;
        setIsInView(visible);
        if (visible) setHasBeenInView(true);
      },
      {
        root: options.root ?? null,
        rootMargin: options.rootMargin ?? "200px",
        threshold: options.threshold ?? 0,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.root, options.rootMargin, options.threshold]);

  return { ref, isInView, hasBeenInView, reveal };
};

export default useInView;
