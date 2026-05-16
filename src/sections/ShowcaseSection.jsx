import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TitleHeader from '../components/TitleHeader'

gsap.registerPlugin(ScrollTrigger)

// --- Updated Laptop Mockup Component (Larger) ---
const LaptopMockup = ({ imgSrc }) => (
  <div className="relative mx-auto w-full max-w-[440px] group/laptop"> 
    {/* Screen Frame - Increased max-width and borders slightly */}
    <div className="relative border-[#2d2d2d] bg-[#2d2d2d] border-[6px] md:border-[8px] rounded-t-xl shadow-2xl transition-transform duration-500 group-hover/laptop:-translate-y-1">
      <div className="rounded-md overflow-hidden aspect-[16/10] bg-black">
        <img 
          src={imgSrc} 
          className="w-full h-full object-cover object-top hover:object-bottom transition-all duration-[4000ms] ease-in-out cursor-pointer" 
          alt="Project View" 
        />
      </div>
    </div>
    {/* Laptop Base */}
    <div className="relative bg-[#1a1a1a] rounded-b-lg h-[9px] md:h-[14px] w-[110%] -left-[5%] shadow-lg">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-md w-[15%] h-[5px] md:h-[7px] bg-[#2d2d2d]"></div>
    </div>
  </div>
);

const projects = [
  {
    title: 'SewaGuru',
    description: 'Home service marketplace platform with smart service matching and booking features.',
    tech: 'React • TailwindCSS • MongoDB',
    image: '/images/1.png',
    link: 'https://sewa-guru.vercel.app/',
  },
  {
    title: 'WAVO',
    description: 'Modern eCommerce clothing platform with admin dashboard and secure checkout.',
    tech: 'React • TailwindCSS • Firebase',
    image: '/images/2.png',
    link: 'https://wawo-clothing.vercel.app/',
  },
  {
    title: 'Organic Garden',
    description: 'Organic and herbal product eCommerce web app with responsive modern UI.',
    tech: 'React • TailwindCSS • Firebase',
    image: '/images/3.png',
    link: 'https://organic-garden.vercel.app/',
  },
  {
    title: 'River Garden Restaurant Website',
    description: 'Modern restaurant landing page with responsive design and smooth user experience.',
    tech: 'React  • TailwindCSS',
    image: '/images/5.png',
    link: 'https://river-garden-restaurant.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    description: 'Interactive animated developer portfolio with 3D models, GSAP animations and smooth transitions.',
    tech: 'React • GSAP • TailwindCSS',
    image: '/images/4.png',
    link: 'https://my-portfolio-two-lilac-z7s588e53f.vercel.app/',
  },
  
]

const ShowcaseSection = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' }
    )

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=50',
            once: true,
          },
        }
      )
    })
  }, [])
 
  return (
     <section

      id="work"

      ref={sectionRef}

      className="w-full py-24 px-5 md:px-10 lg:px-20"

    >
      

      {/* Heading */}

      <div className="text-center mb-16">

        <p className="text-sm uppercase tracking-[0.3em] text-white-50 mb-4">

          My Projects

        </p>



        <h1 className="text-4xl md:text-5xl font-bold text-white">

          Featured Work Showcase

        </h1>



        <p className="text-white-50 max-w-2xl mx-auto mt-5 text-lg">

          A collection of modern full-stack and frontend applications crafted

          with performance, responsiveness, and clean UI experiences.

        </p>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => {
          // Check if it's the last item in an odd-numbered list
          const isLast = index === projects.length - 1;
          const isOdd = projects.length % 2 !== 0;

          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`group relative flex flex-col md:flex-row items-center gap-8 p-8 rounded-[2.5rem] border border-white/5 bg-[#0f0f0f] hover:border-white/10 transition-all duration-500 
                ${isLast && isOdd ? 'lg:col-span-2 lg:w-[calc(50%-20px)] mx-auto' : 'w-full'}`}
            >
              {/* LEFT SIDE: Laptop */}
              <div className="w-full md:w-[50%] flex justify-center shrink-0">
                <LaptopMockup imgSrc={project.image} />
              </div>

              {/* RIGHT SIDE: Content */}
              <div className="flex flex-col gap-3 w-full md:w-[50%]">
                <h2 className="text-xl font-bold text-white tracking-wide">
                  {project.title}
                </h2>

                <p className="text-gray-400 leading-snug text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tech.split(' • ').map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[10px] font-medium rounded-full bg-white/5 text-gray-400 border border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-[13px] font-bold hover:bg-gray-200 transition-all duration-300 group/btn"
                  >
                    View Live Project
                    <span className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default ShowcaseSection