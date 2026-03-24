import { counterItems } from "../constants/index.js";
import useCounter from "./useCounter";

const CounterCard = ({ value, suffix, label }) => {
  const [count, ref] = useCounter(value);

  return (
    <div
      ref={ref}
      className="bg-zinc-900 rounded-lg p-5 sm:p-6 md:p-8 flex flex-col justify-center items-center text-center"
    >
      <div className="counter-number text-white-50 text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
        {count}
        {suffix}
      </div>

      <div className="text-white-50 text-lg">{label}</div>
    </div>
  );
};

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
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