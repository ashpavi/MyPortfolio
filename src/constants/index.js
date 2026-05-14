 const words=[
    {text:'Ideas', imgPath: '/images/ideas.svg'},
    {text:'Concepts', imgPath: '/images/concepts.svg'},
    {text:'Designs', imgPath: '/images/designs.svg'},
    {text:'Code', imgPath: '/images/code.svg'},
    {text:'Ideas', imgPath: '/images/ideas.svg'},
    {text:'Concepts', imgPath: '/images/concepts.svg'},
    {text:'Designs', imgPath: '/images/designs.svg'},
    {text:'Code', imgPath: '/images/code.svg'},
]

 const counterItems = [
  { value: 8, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 500, suffix: "+", label: "Coding Hours" },
  { value: 5, suffix: "+", label: "Live Projects" },
];

const navLinks = [
  {
    name: "AboutMe",
    link: "#aboutme",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const expCards = [
  {
    review:
      "Ashen consistently delivered high-quality frontend solutions during his internship, contributing to responsive and user-friendly web applications while quickly adapting to full stack development workflows.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer Intern",
    date: "2025(Oct) - 2026(April)",
    responsibilities: [
      "Contributed to both frontend and backend development of scalable web applications.",
      "Integrated Firebase services including authentication, database, and hosting features.",
      "Collaborated with the development team on bug fixes, UI improvements, and deployment tasks.",
    ],
  },
  {
    review:
      "Ashen’s transition from intern to permanent full stack developer showcased his technical growth, reliability, and ability to handle both frontend and backend responsibilities efficiently.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer",
    date: "2026 - Present",
    responsibilities: [
      "Building and maintaining scalable full stack web applications for company projects.",
      "Developing reusable ecommerce templates with Firebase backend integration.",
      "Handling UI/UX improvements, responsiveness, deployments, and application optimizations.",
    ],
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const socialImgs = [
  
  {
    name: "Github",
    url: "https://github.com/ashpavi",
    imgPath: "/images/Github.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/ashen-fernando-2000",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "insta",
    url: "https://www.instagram.com/ash_pavi_/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
];
export {words, counterItems, navLinks, abilities, expCards, techStackImgs, techStackIcons, socialImgs}