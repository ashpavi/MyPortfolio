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
    name: "Work",
    link: "#work",
  },
  {
    name: "About Me",
    link: "#aboutme",
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
      "Ashen demonstrated professionalism, dedication, and strong problem-solving abilities throughout his internship, contributing effectively to both frontend and backend development while delivering responsive and scalable web solutions.",
    imgPath: "/images/exp1.jpg",
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
    imgPath: "/images/exp1.jpg",
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
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Javascript",
    modelPath: "/models/javascript_transformed.glb",
    scale: 47,
    rotation: [0, 0, 0],
    position: [0, -2.8, 0],
  },
  {
    name: "Tailwind CSS",
    modelPath: "/models/tailwind_css_transformed.glb",
    scale: 47,
    rotation: [0, 0, 0],
    position: [0, -1, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three.js",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
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