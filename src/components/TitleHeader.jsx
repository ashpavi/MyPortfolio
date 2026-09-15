const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-5 px-2">
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div className="font-semibold text-2xl sm:text-3xl md:text-5xl text-center leading-tight">
        {title}
      </div>
    </div>
  );
};

export default TitleHeader;
