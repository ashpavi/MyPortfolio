import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 pointer-events-none max-w-full overflow-hidden">
        <img src="/images/bg.png" alt="" fetchPriority="high" decoding="async" className="max-w-full" />
      </div>

      <div className="hero-layout">
        <header className="relative z-20 flex flex-col justify-center w-full xl:w-[42%] shrink-0 px-5 sm:px-8 md:px-16 xl:px-20">
          <div className="flex flex-col gap-5 md:gap-7 max-w-xl">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-2 gap-1 h-[1.25em]"
                      >
                        <img
                          src={word.imgPath}
                          alt=""
                          className="xl:size-9 md:size-8 size-6 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 text-sm sm:text-base md:text-xl relative z-10 max-w-xl">
              Hi, I'm <b>Ashen Fernando</b>, a passionate full-stack developer
              with a knack for turning ideas into reality.
            </p>

            <Button
              text="See My Work"
              className="w-full max-w-[200px] md:max-w-56"
              id="work"
            />
          </div>
        </header>

        <figure className="relative z-10 w-full xl:w-[58%] xl:h-full min-h-0">
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <div className="relative z-20 px-0 mt-4 sm:mt-8 xl:mt-6 pb-8">
        <AnimatedCounter />
      </div>
    </section>
  );
};

export default Hero;
