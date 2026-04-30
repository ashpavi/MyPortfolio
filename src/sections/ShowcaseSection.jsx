import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);



const ShowcaseSection = () => {
    const sectionRef= useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    
    

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
        gsap.fromTo(
            card,{
                y:50, opacity:0
            },
            {
                y:0, 
                opacity:1, 
                duration:1.5, 
                delay:0.3 * (index+1),
                scrollTrigger:{
                    trigger: card,
                    start: "top bottom-=100",
                }
            }
    )})

        gsap.fromTo(
  sectionRef.current,
  { opacity: 0 },
  { opacity: 1, duration: 1.5 }
);
    },[]);

  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout' ref={project1Ref}>
                {/* Left side */}
                <div className='first-project-wrapper'>
                    <div className='image-wrapper'>
                        <img src="/images/1.png" alt="SewaGuru" />
                    </div>
                    <div className='text-content'>
                        <h2>SewaGuru - Home Service Marketplace</h2>
                        <p className='text-white-50 md:text-xl'>
                            An App built with React,TailwindCSS for a fast user-friendly experience.
                        </p>
                    </div>
                </div>
                {/* Right side */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/2.png" alt="WAVO" />
                        </div>
                        <h2>WAVO - eCommerce Clothing Web Application</h2>
                    </div>
                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src="/images/3.png" alt="Organic Garden" />
                        </div>
                        <h2>Organic Garden - eCommerce Web Application for herbal products</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection