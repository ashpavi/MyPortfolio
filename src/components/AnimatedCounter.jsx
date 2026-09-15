import { counterItems } from "../constants/index.js";
import useCounter from "./useCounter";

const CounterCard = ({ value, suffix, label }) => {
  const [count, ref] = useCounter(value);

  return (
    <div
      ref={ref}
      className="bg-zinc-900 rounded-lg p-3 sm:p-5 md:p-8 flex flex-col justify-center items-center text-center min-w-0"
    >
      <div className="counter-number text-white-50 text-2xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
        {count}
        {suffix}
      </div>

      <div className="text-white-50 text-[11px] sm:text-sm md:text-lg leading-snug">
        {label}
      </div>
    </div>
  );
};

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg relative z-20">
      <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {counterItems.map((item) => (
          <CounterCard
            key={item.label}
            value={item.value}
            suffix={item.suffix}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
