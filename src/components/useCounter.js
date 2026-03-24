import { useEffect, useState, useRef } from "react";

const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let startTime;
          let frame;

          const easeOut = (t) => 1 - Math.pow(1 - t, 3); // smooth easing

          const animate = (time) => {
            if (!startTime) startTime = time;
            const progress = time - startTime;

            const percentage = Math.min(progress / duration, 1);
            const eased = easeOut(percentage);

            const value = Math.floor(eased * end);
            setCount(value);

            if (percentage < 1) {
              frame = requestAnimationFrame(animate);
            }
          };

          frame = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 } // triggers when 50% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return [count, ref];
};

export default useCounter;