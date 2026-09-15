import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, Download } from "lucide-react";

import TitleHeader from "../components/TitleHeader";
import { socialImgs } from "../constants";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true });

const AboutMe = () => {
  useGSAP(() => {
    gsap.from(".about-panel", {
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  return (
    <section className="flex-center md:mt-40 mt-20 section-padding xl:px-0 overflow-x-hidden">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="About Me" sub="👨‍💻 Get To Know Me" />

        <div className="about-container grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-20">
          <div className="about-panel bg-[#161616] border border-[#2A2A2A] rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl flex flex-col gap-6 sm:gap-8 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center items-center text-center sm:text-left gap-5">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#3A3A3A] shrink-0">
                <img
                  src="/images/profile.webp"
                  alt="profile"
                  width={224}
                  height={224}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0 flex flex-col items-center sm:items-start">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Ashen Fernando
                </h1>
                <p className="text-gray-400 mt-2 text-base sm:text-lg">
                  Full Stack Developer
                </p>

                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 mt-4">
                  {socialImgs.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-[#202020] border border-[#343434] flex items-center justify-center hover:bg-[#2B2B2B] hover:scale-110 transition-all duration-300"
                    >
                      <img
                        src={social.imgPath}
                        alt={social.name}
                        className="w-5 h-5 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                  ))}

                  <a
                    href="/cv.pdf"
                    download
                    className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white text-black font-medium text-sm sm:text-base hover:scale-105 transition-all duration-300"
                  >
                    <Download size={18} />
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            <p className="text-gray-400 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg">
              I'm a passionate Full Stack Developer with experience in
              building modern, responsive, and scalable web applications.
              I enjoy creating smooth user experiences, developing reusable
              components, and bringing creative ideas to life through code.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-4 bg-[#1D1D1D] border border-[#2E2E2E] rounded-2xl p-3 sm:p-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#252525] flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-500">Email</p>
                  <p className="text-white text-sm sm:text-[15px] break-all leading-6">
                    ashenpavithra@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 bg-[#1D1D1D] border border-[#2E2E2E] rounded-2xl p-3 sm:p-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#252525] flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-500">Phone</p>
                  <p className="text-white text-sm md:text-base">
                    +94 77 924 4529
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 min-w-0">
            <div className="about-panel bg-[#161616] border border-[#2A2A2A] rounded-3xl p-5 sm:p-6 md:p-7 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-semibold mb-5">
                🎓 Education
              </h2>
              <div className="space-y-5 text-gray-400 text-sm sm:text-base">
                <div>
                  <h3 className="text-white text-base sm:text-lg font-medium">
                    BSc (Hons) Software Engineering
                  </h3>
                  <p className="mt-1">
                    University of Plymouth (NSBM Green University)
                  </p>
                </div>
                <div>
                  <h3 className="text-white text-base sm:text-lg font-medium">
                    Specialized Areas
                  </h3>
                  <p className="mt-1 leading-7">
                    Full Stack Web Development, Interactive UI Design, Firebase & Backend Integration,
                    Deployment & Performance Optimization and REST API Integration.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-panel bg-[#161616] border border-[#2A2A2A] rounded-3xl p-5 sm:p-6 md:p-7 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-semibold mb-5">
                🚀 Skills
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "React",
                  "JavaScript",
                  "TailwindCSS",
                  "Firebase",
                  "Node.js",
                  "MongoDB",
                  "Three.js",
                  "GitHub",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 sm:px-4 py-2 rounded-full bg-[#202020] text-gray-300 text-sm border border-[#343434] hover:bg-[#2A2A2A] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
