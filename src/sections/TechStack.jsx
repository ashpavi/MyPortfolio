import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TechIcons from "../components/Models/TechLogos/TechIcons";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true });

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 40 },
      {
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
          once: true,
        },
      }
    );
  });

  return (
    <div className="relative flex-center section-padding overflow-hidden">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Tech Stack"
          sub="The Skills I bring in to the Table"
        />
        <div className="mt-14">
          <div className="grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-5">
            {techStackIcons.map((icon) => (
              <div
                key={icon.name}
                className="card-border tech-card overflow-hidden group rounded-3xl"
              >
                <div className="tech-card-animated-bg" />
                <div className="tech-card-content mb-4">
                  <div className="tech-icon-wrapper">
                    <TechIcons model={icon} />
                  </div>
                  <div className="padding-x w-full ">
                    <p>{icon.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
