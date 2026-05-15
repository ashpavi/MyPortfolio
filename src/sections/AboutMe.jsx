import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Mail,
  Phone,
  Download,
} from "lucide-react";

import TitleHeader from "../components/TitleHeader";
import { socialImgs } from "../constants";

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
        delay: index * 0.12,
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

        <div className="about-container grid xl:grid-cols-2 grid-cols-1 gap-8 mt-20">
          
          {/* LEFT SIDE */}
          <div className="about-left">
            <div className="bg-[#161616] border border-[#2A2A2A] rounded-3xl p-6 md:p-8 h-full shadow-xl">

              {/* PROFILE */}
              <div className="flex flex-col sm:flex-row sm:items-center items-center text-center sm:text-left gap-6 mb-8">
                
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#3A3A3A] shrink-0">
                  <img
                    src="/images/profile.jpg"
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col items-center sm:items-start">
                  <h1 className="text-3xl md:text-4xl font-bold">
                    Ashen Fernando
                  </h1>

                  <p className="text-gray-400 mt-2 text-lg">
                    Full Stack Developer
                  </p>

                  {/* SOCIALS */}
                  <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 mt-5">
                    
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
                        />
                      </a>
                    ))}

                    {/* CV BUTTON */}
                    <a
                      href="/cv.pdf"
                      download
                      className="flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-300"
                    >
                      <Download size={18} />
                      Download CV
                    </a>

                  </div>
                </div>
              </div>

              {/* ABOUT TEXT */}
              <p className="text-gray-400 leading-8 text-base md:text-lg">
                I'm a passionate Full Stack Developer with experience in
                building modern, responsive, and scalable web applications.
                I enjoy creating smooth user experiences, developing reusable
                components, and bringing creative ideas to life through code.
              </p>

              {/* CONTACT INFO */}
              <div className="grid lg:grid-cols-2 gap-4 mt-10">

                {/* EMAIL */}
                <div className="flex items-center gap-4 bg-[#1D1D1D] border border-[#2E2E2E] rounded-2xl p-4">

                <div className="w-12 h-12 rounded-full bg-[#252525] flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="text-white text-[15px] break-words leading-6">
                    ashenpavithra@gmail.com
                  </p>
                </div>
              </div>

                {/* PHONE */}
                <div className="flex items-center gap-4 bg-[#1D1D1D] border border-[#2E2E2E] rounded-2xl p-4">
                  
                  <div className="w-12 h-12 rounded-full bg-[#252525] flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Phone
                    </p>

                    <p className="text-white text-sm md:text-base">
                      +94 77 924 4529
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="about-right flex flex-col gap-6">

            {/* EDUCATION */}
            <div className="info-card bg-[#161616] border border-[#2A2A2A] rounded-3xl p-6 md:p-7 shadow-xl">
              
              <h2 className="text-2xl font-semibold mb-5">
                🎓 Education
              </h2>

              <div className="space-y-5 text-gray-400">
                
                <div>
                  <h3 className="text-white text-lg font-medium">
                    BSc (Hons) Software Engineering
                  </h3>

                  <p className="mt-1">
                    University of Plymouth (NSBM Green University)
                  </p>
                </div>

                <div>
                  <h3 className="text-white text-lg font-medium">
                    Specialized Areas
                  </h3>

                  <p className="mt-1 leading-7">
                    Full Stack Web Development, Interactive UI Design, Firebase & Backend Integration,
                    Deployment & Performance Optimization and REST API Integration.
                  </p>
                </div>

              </div>
            </div>

            {/* SKILLS */}
            <div className="info-card bg-[#161616] border border-[#2A2A2A] rounded-3xl p-6 md:p-7 shadow-xl">

              <h2 className="text-2xl font-semibold mb-5">
                🚀 Skills
              </h2>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "JavaScript",
                  "TailwindCSS",
                  "Firebase",
                  "Node.js",                 
                  "MongoDB",
                  "Three.js",                  
                  "GitHub",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-[#202020] text-gray-300 border border-[#343434] hover:bg-[#2A2A2A] transition-all duration-300"
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