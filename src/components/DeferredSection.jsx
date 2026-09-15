import { Suspense, useEffect } from "react";
import useInView from "../hooks/useInView";

const DeferredSection = ({
  children,
  id,
  minHeight = "60vh",
  rootMargin = "400px",
}) => {
  const { ref, hasBeenInView, reveal } = useInView({ rootMargin });

  useEffect(() => {
    if (!id) return;

    const mountIfTarget = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === id) reveal();
    };

    mountIfTarget();
    window.addEventListener("hashchange", mountIfTarget);

    const onClick = (event) => {
      const link = event.target.closest(`a[href="#${id}"]`);
      if (link) reveal();
    };
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("hashchange", mountIfTarget);
      document.removeEventListener("click", onClick);
    };
  }, [id, reveal]);

  return (
    <div
      id={id}
      ref={ref}
      style={{ minHeight: hasBeenInView ? undefined : minHeight }}
    >
      {hasBeenInView ? (
        <Suspense fallback={<div style={{ minHeight }} />}>{children}</Suspense>
      ) : null}
    </div>
  );
};

export default DeferredSection;
