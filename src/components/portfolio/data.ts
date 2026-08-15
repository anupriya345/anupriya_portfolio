import faceImg from "@/assets/project-face.jpg";
import shellImg from "@/assets/project-shell.jpg";
import newsImg from "@/assets/project-news.jpg";
import vizImg from "@/assets/project-viz.jpg";
import carImg from "@/assets/project-car.jpg";
import ecomImg from "@/assets/project-ecommerce.jpg";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT = {
  email: "singhanupriya991979@gmail.com",
  phone: "+91 9919797257",
  location: "Kushinagar, Uttar Pradesh, India",
  linkedin: "https://www.linkedin.com/in/anupriya-singh234",
  github: "https://github.com/anupriya345",
};

export const STATS = [
  { value: 6, suffix: "+", label: "Projects" },
  { value: 4, suffix: "", label: "Internship Experiences" },
  { value: null, display: "SIH", label: "Hackathon Finalist" },
  { value: null, display: "1st", label: "Coding Competition Winner" },
  { value: null, display: "Multiple", label: "Technical Workshops" },
] as const;

export const EXPERIENCE = [
  {
    role: "Data Science Intern",
    org: "EISYSTEM TECHNEX'25",
    points: [
      "Data science fundamentals applied to real datasets",
      "Data analysis and interpretation",
      "Practical problem solving",
      "Working with data-driven concepts",
    ],
    tags: ["Data Science", "Data Analysis", "Python"],
  },
  {
    role: "Data Science Intern",
    org: "CodeAlpha",
    points: [
      "Data science and analysis tasks",
      "Machine learning concepts",
      "Practical project development",
      "Reporting insights from data",
    ],
    tags: ["Machine Learning", "Pandas", "NumPy"],
  },
  {
    role: "Data Science Intern",
    org: "EduSkill",
    points: [
      "Data science and machine learning workflows",
      "Building data-driven applications",
      "Structured technical learning",
      "Model experimentation",
    ],
    tags: ["Data Science", "ML", "Visualization"],
  },
  {
    role: "MERN Stack Intern",
    org: "IBM PEBL",
    points: [
      "Full-stack web application development",
      "Backend and REST API concepts",
      "Frontend development with React",
      "Database integration with MongoDB",
    ],
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
  },
];

export const SKILLS = [
  { title: "Programming Languages", items: ["Python", "C++", "JavaScript", "Shell Scripting"] },
  {
    title: "Data Science & Analytics",
    items: ["Pandas", "NumPy", "Matplotlib", "Power BI", "Tableau", "Excel"],
  },
  {
    title: "Web Technologies",
    items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "REST APIs"],
  },
  { title: "Databases", items: ["MongoDB", "SQL"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Jupyter Notebook"] },
  {
    title: "Soft Skills",
    items: ["Leadership", "Communication", "Time Management", "Event Management"],
  },
];

export const PROFICIENCY = [
  { name: "Python & Data Science", level: "Advanced", value: 88 },
  { name: "MERN Stack Development", level: "Proficient", value: 78 },
  { name: "Machine Learning", level: "Proficient", value: 74 },
  { name: "Data Visualization", level: "Advanced", value: 84 },
];

export const SERVICES = [
  {
    no: "01",
    title: "Web Development",
    body: "Build responsive, modern, and user-friendly websites and web applications using modern frontend and backend technologies.",
  },
  {
    no: "02",
    title: "MERN Stack Development",
    body: "Develop full-stack applications using MongoDB, Express.js, React, and Node.js with REST API integration.",
  },
  {
    no: "03",
    title: "Data Science",
    body: "Analyze datasets, identify meaningful patterns, perform data preprocessing, and generate useful insights.",
  },
  {
    no: "04",
    title: "Machine Learning & AI",
    body: "Develop practical AI/ML solutions for prediction, classification, recognition, and intelligent automation.",
  },
  {
    no: "05",
    title: "Data Visualization",
    body: "Transform complex datasets into understandable dashboards and visual insights using Power BI, Tableau, Excel, and Matplotlib.",
  },
  {
    no: "06",
    title: "REST API Development",
    body: "Design and integrate backend APIs for scalable web applications using Node.js and Express.js.",
  },
];

export const PROJECT_FILTERS = [
  "All",
  "Web Development",
  "Data Science",
  "AI / ML",
  "Data Visualization",
  "Automation",
] as const;

export type Project = {
  id: string;
  no: string;
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  categories: string[];
  image: string;
  featured?: boolean;
  demo?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "picngo",
    no: "06",
    title: "PickNGo E-Commerce Website",
    description:
      "A modern full-stack e-commerce web application featuring product browsing, authentication, cart management, checkout, address management, and order placement.",
    highlights: [
      "Login / Signup",
      "Product management",
      "Shopping cart",
      "Checkout",
      "Address management",
      "Order placement",
      "REST APIs",
      "MongoDB integration",
    ],
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    categories: ["Web Development"],
    image: ecomImg,
    featured: true,
  },
  {
    id: "face",
    no: "01",
    title: "AI Face Recognition Attendance System",
    description:
      "A smart attendance solution using face recognition technology to identify registered individuals and automate attendance recording.",
    highlights: ["Face recognition", "Computer vision", "Automated attendance", "AI-based identification"],
    tags: ["Python", "OpenCV", "AI/ML"],
    categories: ["AI / ML", "Automation"],
    image: faceImg,
  },
  {
    id: "gpa",
    no: "02",
    title: "GPA Computation Using Shell Scripting",
    description:
      "A command-line academic utility developed with Ubuntu shell scripting to automate GPA computation from student academic data.",
    highlights: ["Automation", "Shell scripting", "Linux / Ubuntu", "Academic data processing"],
    tags: ["Shell Scripting", "Ubuntu", "Linux"],
    categories: ["Automation"],
    image: shellImg,
  },
  {
    id: "fakenews",
    no: "03",
    title: "Fake News Detection",
    description:
      "A machine-learning project focused on identifying whether news content is likely to be genuine or fake using text classification.",
    highlights: ["Data preprocessing", "Text classification", "Machine learning", "Prediction"],
    tags: ["Python", "Pandas", "NumPy", "Machine Learning"],
    categories: ["AI / ML", "Data Science"],
    image: newsImg,
  },
  {
    id: "netflix",
    no: "04",
    title: "Netflix Data Visualization",
    description:
      "An analytical and visualization project exploring Netflix content data to identify trends, patterns, categories, and insights.",
    highlights: ["Exploratory data analysis", "Data visualization", "Trend analysis", "Data-driven insights"],
    tags: ["Python", "Pandas", "Matplotlib", "Data Visualization"],
    categories: ["Data Visualization", "Data Science"],
    image: vizImg,
  },
  {
    id: "carprice",
    no: "05",
    title: "Car Price Prediction",
    description:
      "A machine-learning project designed to predict car prices using relevant vehicle attributes and regression modelling.",
    highlights: ["Data preprocessing", "Feature analysis", "Regression", "Prediction"],
    tags: ["Python", "Pandas", "NumPy", "Machine Learning"],
    categories: ["AI / ML", "Data Science"],
    image: carImg,
  },
];

export const ACHIEVEMENTS = [
  {
    icon: "trophy",
    title: "TechYuve Coding Competition",
    badge: "Winner",
    body: "Recognised for competitive programming and problem-solving ability under time pressure.",
  },
  {
    icon: "rocket",
    title: "Smart India Hackathon",
    badge: "Finalist",
    body: "Selected as a finalist for innovation, teamwork, and solving a real-world problem statement.",
  },
  {
    icon: "graduation",
    title: "Technical Workshops",
    badge: "Participant",
    body: "Participated in multiple technical workshops focused on learning new technologies and sharpening skills.",
  },
];

export const TECH_CLOUD = [
  "Python",
  "C++",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Pandas",
  "NumPy",
  "Power BI",
  "Tableau",
  "Git",
  "GitHub",
  "Jupyter",
  "HTML",
  "CSS",
];

export const WHY = [
  {
    title: "Problem Solver",
    body: "I enjoy breaking complex problems into practical and manageable solutions.",
  },
  {
    title: "Continuous Learner",
    body: "I continuously explore new technologies and improve my technical skills.",
  },
  {
    title: "Multi-Domain Developer",
    body: "My experience spans software development, data science, AI, and data visualization.",
  },
  {
    title: "Project-Oriented",
    body: "I believe the best way to learn technology is by building real projects.",
  },
  {
    title: "Team Player",
    body: "Competitions, workshops, and projects have strengthened my communication and collaboration skills.",
  },
];
