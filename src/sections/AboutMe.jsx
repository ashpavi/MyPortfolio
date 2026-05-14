import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useGSAP(() => {
    gsap.from(".about-left", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 75%",
      },
    });

    gsap.from(".about-right", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 75%",
      },
    });

    gsap.utils.toArray(".info-card").forEach((card, index) => {
      gsap.from(card, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section
      id="aboutme"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="About Me"
          sub="👨‍💻 Get To Know Me"
        />

        <div className="about-container grid xl:grid-cols-2 grid-cols-1 gap-10 mt-20">
          
          {/* LEFT SIDE */}
          <div className="about-left">
            <div className="bg-[#10132E] border border-[#1C2147] rounded-3xl p-8 h-full">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#4B6BFB]">
                  <img
                    src="/images/profile.png"
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h1 className="text-3xl font-bold">
                    Ashen Fernando
                  </h1>
                  <p className="text-white-50 mt-2">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              <p className="text-[#839CB5] leading-8 text-lg">
                I’m a passionate Full Stack Developer with experience in
                building modern, responsive, and scalable web applications.
                I enjoy creating smooth user experiences, developing reusable
                components, and bringing creative ideas to life through code.
              </p>

              <p className="text-[#839CB5] leading-8 text-lg mt-6">
                I recently completed my Software Engineering degree and
                currently work on real-world projects involving React,
                Firebase, TailwindCSS, and modern frontend animations using
                GSAP.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="about-right flex flex-col gap-6">
            
            <div className="info-card bg-[#10132E] border border-[#1C2147] rounded-3xl p-7">
              <h2 className="text-2xl font-semibold mb-4">
                🎓 Education
              </h2>

              <div className="space-y-4 text-[#839CB5]">
                <div>
                  <h3 className="text-white text-lg font-medium">
                    BSc (Hons) Software Engineering
                  </h3>
                  <p>Completed Undergraduate Degree</p>
                </div>

                <div>
                  <h3 className="text-white text-lg font-medium">
                    Specialized Areas
                  </h3>
                  <p>
                    Full Stack Development, UI/UX Design, Database Systems,
                    and Software Architecture
                  </p>
                </div>
              </div>
            </div>

            <div className="info-card bg-[#10132E] border border-[#1C2147] rounded-3xl p-7">
              <h2 className="text-2xl font-semibold mb-4">
                🚀 Skills
              </h2>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "JavaScript",
                  "TailwindCSS",
                  "Firebase",
                  "Node.js",
                  "GSAP",
                  "MongoDB",
                  "Git",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-[#1A1F45] text-[#C7D2FE] border border-[#2B356D]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="info-card bg-[#10132E] border border-[#1C2147] rounded-3xl p-7">
              <h2 className="text-2xl font-semibold mb-4">
                💡 Interests
              </h2>

              <p className="text-[#839CB5] leading-7">
                I enjoy exploring modern web technologies, creating interactive
                UI animations, designing clean interfaces, and building
                scalable web applications that solve real-world problems.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;