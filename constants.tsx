import { Project, Skill } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "001-PRO",
    title: "COGNIFY ENTERPRISE",
    subtitle: "FULL STACK DEVELOPER",
    description:
      "Spearheaded the development of real-time enterprise applications using React.js and Node.js. Integrated complex frontend logic with secure backend APIs to ensure scalability.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["REACT", "NODE.JS", "FULL STACK"],
    tech: ["Express", "MongoDB", "Redux"],
    status: "DEPLOYED",
    coordinates: "SEC: ENTERPRISE / LEVEL: MAX",
    demoUrl: "https://cognify.education/",
  },
  {
    id: "002-PRO",
    title: "BOOKIFY SYSTEM",
    subtitle: "FULL STACK ARCHITECT",
    description:
      "Engineered robust backend architecture with optimized RESTful APIs while managing full-stack integration for efficient data retrieval and schema management.",
    imageUrl:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
    tags: ["NODE.JS", "API DESIGN", "FULL STACK"],
    tech: ["REST API", "Database Design", "Security"],
    status: "ACTIVE",
    coordinates: "SEC: BACKEND / GRID: 09",
    demoUrl: "http://bvh.preesoft.net/",
  },
  {
    id: "003-PRO",
    title: "TALENT BRIDGE",
    subtitle: "FULL STACK ENGINEER",
    description:
      "Built dynamic and responsive user interfaces with a focus on component reusability and intuitive UX, ensuring seamless backend connectivity.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["REACT", "UX/UI", "FULL STACK"],
    tech: ["Tailwind", "React Query", "Figma"],
    status: "LIVE",
    coordinates: "POS: FRONTEND / LAYER: UI",
    demoUrl: "https://talent-dev.blackhives.com/auth/login?tenant=default",
  },
  {
    id: "004-PER",
    title: "NEXUS E-COMMERCE",
    subtitle: "NEXT.JS PLATFORM",
    description:
      "Full-stack e-commerce platform with Admin Dashboard, JWT authentication, and Redux Toolkit state management. Features complete product and order management.",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    tags: ["NEXT.JS", "REDUX", "TYPESCRIPT"],
    tech: ["MERN", "JWT", "Stripe"],
    status: "SYSTEM_READY",
    coordinates: "GIT: REPO_01 / BRANCH: MAIN",
    repoUrl: "https://github.com/codewithahsanzahoor/ecommerce_mern_api_1",
  },
  {
    id: "005-PER",
    title: "SECURE CHAT",
    subtitle: "REAL-TIME COMM",
    description:
      "Real-time messaging architecture using WebSockets for instant data updates, Cloudinary for media, and Zustand for global state management.",
    imageUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    tags: ["WEBSOCKET", "ZUSTAND", "MERN"],
    tech: ["Socket.io", "Cloudinary", "React"],
    status: "ONLINE",
    coordinates: "SOCKET: OPEN / PORT: 8080",
    repoUrl: "https://github.com/codewithahsanzahoor/chat_app_mern",
  },
];

export const SKILLS: Skill[] = [
  // FRONTEND
  {
    name: "React / Next.js",
    proficiency: 95,
    icon: "code",
    module: "FE_CORE",
    category: "FRONTEND",
  },
  {
    name: "TypeScript",
    proficiency: 90,
    icon: "integration_instructions",
    module: "FE_LANG",
    category: "FRONTEND",
  },
  {
    name: "Redux / Zustand",
    proficiency: 92,
    icon: "settings_system_daydream",
    module: "FE_STATE",
    category: "FRONTEND",
  },
  {
    name: "Tailwind / Bootstrap",
    proficiency: 95,
    icon: "style",
    module: "FE_UI",
    category: "FRONTEND",
  },
  {
    name: "MaterialUI / Shadcn",
    proficiency: 88,
    icon: "widgets",
    module: "FE_LIB",
    category: "FRONTEND",
  },
  {
    name: "HTML5 / CSS3",
    proficiency: 98,
    icon: "html",
    module: "FE_BASE",
    category: "FRONTEND",
  },

  // BACKEND
  {
    name: "Node.js / Express",
    proficiency: 90,
    icon: "dns",
    module: "BE_JS",
    category: "BACKEND",
  },
  {
    name: "Python / Django / Flask",
    proficiency: 85,
    icon: "psychology",
    module: "BE_PY",
    category: "BACKEND",
  },
  {
    name: "PHP / Laravel",
    proficiency: 80,
    icon: "php",
    module: "BE_PHP",
    category: "BACKEND",
  },
  {
    name: "MongoDB / Firebase",
    proficiency: 92,
    icon: "storage",
    module: "BE_NOSQL",
    category: "BACKEND",
  },
  {
    name: "MySQL / PostgreSQL",
    proficiency: 85,
    icon: "table_chart",
    module: "BE_SQL",
    category: "BACKEND",
  },

  // TOOLS (Optional - can be moved to Backend if preferred, but usually separate)
  {
    name: "Docker / DevOps",
    proficiency: 75,
    icon: "cloud_queue",
    module: "OPS_CONT",
    category: "BACKEND", // Kept in Backend as per request to split into Front/Back
  },
  {
    name: "Git / GitHub",
    proficiency: 95,
    icon: "commit",
    module: "OPS_VCS",
    category: "BACKEND", // Kept in Backend
  },
];
