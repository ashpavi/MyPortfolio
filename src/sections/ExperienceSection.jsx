import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true });

const Experience = () => {
  useGSAP(() => {
    gsap.from(".exp-review", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".experience-section",
        start: "top 75%",
        once: true,
      },
    });

    gsap.from(".exp-details", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".experience-section",
        start: "top 75%",
        once: true,
      },
    });
  }, []);

  return (
    <section
      className="experience-section flex-center md:mt-40 mt-20 section-padding xl:px-0 overflow-x-hidden"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-16 sm:mt-20 md:mt-24">
          {expCards.map((card) => (
            <div
              key={card.title}
              className="grid grid-cols-1 xl:grid-cols-[minmax(0,5fr)_auto_minmax(0,7fr)] gap-8 xl:gap-12 items-start"
            >
              <div className="exp-review min-w-0">
                <GlowCard card={card}>
                  <div>
                    <img
                      src={card.imgPath}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto max-w-full rounded-lg"
                    />
                  </div>
                </GlowCard>
              </div>

              <div className="hidden xl:flex flex-col items-center pt-6">
                <div className="size-20 rounded-full border border-black-50 bg-black-100 flex items-center justify-center overflow-hidden shrink-0 z-10">
                  <img
                    src={card.logoPath}
                    alt=""
                    className="w-[70%] h-[70%] object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="w-px flex-1 min-h-[140px] mt-4 bg-gradient-to-b from-[#62e0ff] via-[#fd5c79] to-transparent" />
              </div>

              <div className="exp-details min-w-0">
                <div className="flex items-center gap-4 xl:gap-0 mb-5">
                  <div className="xl:hidden size-14 rounded-full border border-black-50 bg-black-100 flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={card.logoPath}
                      alt=""
                      className="w-[70%] h-[70%] object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl">
                      {card.title}
                    </h1>
                    <p className="mt-2 text-white-50 text-sm sm:text-base">
                      🗓️&nbsp;{card.date}
                    </p>
                  </div>
                </div>

                <p className="text-[#839CB5] italic">Responsibilities</p>
                <ul className="list-disc ms-5 mt-4 sm:mt-5 flex flex-col gap-3 sm:gap-4 text-white-50">
                  {card.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-sm sm:text-base md:text-lg">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
