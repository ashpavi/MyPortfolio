import React, { useRef } from "react";

const GlowCard = ({ card, children }) => {
  const cardRef = useRef(null);
  const rectRef = useRef(null);
  const frameRef = useRef(null);

  const handleMouseEnter = () => {
    rectRef.current = cardRef.current.getBoundingClientRect();
  };

  const handleMouseMove = (e) => {
    if (frameRef.current) return;

    frameRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      const rect = rectRef.current;

      if (!card || !rect) return;

      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

      angle = (angle + 360) % 360;

      card.style.setProperty("--start", `${angle + 60}`);

      frameRef.current = null;
    });
  };

  return (
  <div
    ref={cardRef}
    onMouseEnter={handleMouseEnter}
    onMouseMove={handleMouseMove}
    className="card card-border timeline-card rounded-xl p-10"
  >
    <div className="glow" />

    {card.review && (
      <>
        <div className="flex items-center gap-1 mb-5">
          {Array.from({ length: 5 }, (_, i) => (
            <img
              src="/images/star.png"
              key={i}
              alt="star"
              className="size-5"
              loading="lazy"
            />
          ))}
        </div>

        <div className="mb-5">
          <p className="text-white-50 text-lg text-justify">
            {card.review}
          </p>
        </div>
      </>
    )}

    {children}
  </div>
  );
};

export default GlowCard;