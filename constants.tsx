import { Project, Skill } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "000-CUR",
    title: "METRIVA",
    subtitle: "FULL STACK DEV @ ELEVORIX SOLUTIONS",
    description:
      "Current role: full-stack web application with complete authentication & user-management system. Auth flows (Login, Register, OTP email verification, Forgot/Reset Password) using Next.js App Router, React 19, Tailwind CSS v4 & TanStack React Query. Secure REST APIs with Node.js, Express & MongoDB — JWT access/refresh tokens in HttpOnly cookies, bcrypt hashing, hashed single-use OTP/reset tokens, Zod validation & Nodemailer. Silent token refresh with request queuing and Protected/Guest route guards.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["NEXT.JS", "NODE.JS", "AUTH SYSTEMS"],
    tech: [
      "React 19",
      "Tailwind v4",
      "TanStack Query",
      "MongoDB",
      "Zod",
      "Nodemailer",
    ],
    status: "IN DEVELOPMENT",
    coordinates: "SEC: ELEVORIX / STATUS: CURRENT",
  },
  {
    id: "001-PRO",
    title: "COGNIFY ENTERPRISE",
    subtitle: "FULL STACK DEVELOPER",
    description:
      "Multi-tenant AI-powered LMS with role-based dashboards for Admins, Teachers, Students & Parents. Built in a team of 20+ using React, TypeScript, Node.js, Express, MongoDB & microservices; JWT auth, Stripe subscriptions, AWS S3, RBAC; Figma-to-code with Tailwind, SCSS, Shadcn UI & Material UI; AI-powered Exam Builder & monetization modules.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["REACT", "NODE.JS", "MICROSERVICES"],
    tech: ["TypeScript", "Stripe", "AWS S3"],
    status: "DEPLOYED",
    coordinates: "SEC: ENTERPRISE / LEVEL: MAX",
    demoUrl: "https://cognify.education/",
  },
  {
    id: "002-PRO",
    title: "BOOKIFY SYSTEM",
    subtitle: "FULL STACK ARCHITECT",
    description:
      "Multi-tenant SaaS Billing & Organization Management system. Backend with Node.js, TypeScript, Express, Prisma ORM, MySQL & Inversify DI; dashboards with React 19, Vite, Material UI v7 & SWR; JWT, RBAC, route guards & type-safe validation (React Hook Form + Zod). Built in a 2-developer backend team.",
    imageUrl:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
    tags: ["NODE.JS", "PRISMA", "MYSQL"],
    tech: ["TypeScript", "Inversify", "SWR"],
    status: "ACTIVE",
    coordinates: "SEC: BACKEND / GRID: 09",
    demoUrl: "http://bvh.preesoft.net/",
  },
  {
    id: "003-PRO",
    title: "TALENT BRIDGE",
    subtitle: "FRONTEND DEVELOPER",
    description:
      "Multi-tenant Job Board & LMS (frontend-only role). Next.js App Router, React 19, TypeScript, Redux Toolkit & Tailwind CSS; JWT silent token refresh via Axios interceptors with request queuing; AuthGuard, GuestGuard, RoleBasedGuard & granular permissions. Team of 10.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["NEXT.JS", "REDUX TOOLKIT", "TYPESCRIPT"],
    tech: ["Tailwind", "React Query", "Figma"],
    status: "LIVE",
    coordinates: "POS: FRONTEND / LAYER: UI",
    demoUrl: "https://talent-dev.blackhives.com/auth/login?tenant=default",
  },
  {
    id: "004-PER",
    title: "E-COMMERCE Store",
    subtitle: "NEXT.JS PLATFORM",
    description:
      "Full-stack e-commerce platform with Admin Dashboard, JWT authentication, and Redux Toolkit state management. Features complete product and order management.",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    tags: ["NEXT.JS", "REDUX", "TYPESCRIPT"],
    tech: ["MERN", "JWT", "Stripe"],
    status: "SYSTEM_READY",
    coordinates: "GIT: REPO_01 / BRANCH: MAIN",
    repoUrl: "https://github.com/codewithahsanzahoor/nexus-store---future",
  },
  {
    id: "005-PER",
    title: "CHAT APP",
    subtitle: "REAL-TIME COMM",
    description:
      "Real-time messaging architecture using WebSockets for instant data updates, Cloudinary for media, and Zustand for global state management.",
    imageUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    tags: ["WEBSOCKET", "ZUSTAND", "MERN"],
    tech: ["Socket.io", "Cloudinary", "React"],
    status: "ONLINE",
    coordinates: "SOCKET: OPEN / PORT: 8080",
    repoUrl: "https://github.com/codewithahsanzahoor/nexus-chat",
  },
  {
    id: "006-PRO",
    title: "GYM MANAGEMENT SYSTEM",
    subtitle: "FULL STACK MERN",
    description:
      "A comprehensive solution for fitness centers featuring member management, subscription tracking, and attendance monitoring with a secure dashboard.",
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    tags: ["MERN", "DASHBOARD", "MANAGEMENT"],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    status: "ACTIVE",
    coordinates: "SEC: GYM / GRID: 12",
    repoUrl: "https://github.com/codewithahsanzahoor/gym_management_system",
  },
  {
    id: "007-MOB",
    title: "FASHION E-COMMERCE",
    subtitle: "REACT NATIVE MOBILE",
    description:
      "Sleek mobile shopping experience with real-time product updates, category filtering, and seamless checkout flow for cross-platform performance.",
    imageUrl:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    tags: ["MOBILE", "REACT NATIVE", "ECOMMERCE"],
    tech: ["React Native", "Node.js", "Redux"],
    status: "SYSTEM_READY",
    coordinates: "OS: ANDROID_IOS / LAYER: APP",
    repoUrl:
      "https://github.com/codewithahsanzahoor/fashion_ecommerce_app_reactNativeCli",
  },
  {
    id: "008-PRO",
    title: "NEXUS BOOK STORE",
    subtitle: "FULL STACK MERN",
    description:
      "Dedicated platform for book lovers featuring library management, search functionality, and secure user authentication for high-performance retrieval.",
    imageUrl:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop",
    tags: ["MERN", "LIBRARY", "WEB APP"],
    tech: ["MongoDB", "Express", "React", "Node.js"],
    status: "LIVE",
    coordinates: "SEC: LIBRARY / POS: DB",
    repoUrl: "https://github.com/codewithahsanzahoor/book_store_mern",
  },
  {
    id: "009-PRO",
    title: "E-COMMERCE ECOSYSTEM",
    subtitle: "FULL STACK PLATFORM",
    description:
      "Complete e-commerce ecosystem with advanced product filtering, order management, and secure payment integration with an admin dashboard.",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    tags: ["MERN", "E-COMMERCE", "ADMIN"],
    tech: ["MongoDB", "Express", "React", "Stripe"],
    status: "SYSTEM_READY",
    coordinates: "SEC: STORE / GRID: 05",
    repoUrl: "https://github.com/codewithahsanzahoor/ecommerce_mern",
  },
  {
    id: "010-FYP",
    title: "MEDICAL OCR SYSTEM",
    subtitle: "FINAL YEAR PROJECT",
    description:
      "Medical Document OCR & Text Extraction System. Pipeline: PDF → Images → Preprocessing → OCR → Regex Parsing → Structured JSON. FastAPI, Streamlit, OpenCV, Tesseract OCR, pytesseract & Regex; adaptive thresholding for noisy scans; handwritten OCR; Hugging Face translation/summarization; medicine information lookup.",
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    tags: ["PYTHON", "FASTAPI", "OCR"],
    tech: ["OpenCV", "Tesseract", "Streamlit"],
    status: "COMPLETED",
    coordinates: "SEC: ACADEMIC / TYPE: FYP",
    repoUrl: "https://github.com/codewithahsanzahoor/fyp_ocr_medicen_detail",
  },
];

export const SKILLS: Skill[] = [
  // FRONTEND
  {
    name: "React / Next.js + Tailwind",
    proficiency: 95,
    icon: "code",
    module: "FE_CORE",
    category: "FRONTEND",
  },
  {
    name: "JavaScript",
    proficiency: 92,
    icon: "code",
    module: "FE_JS",
    category: "FRONTEND",
  },
  {
    name: "TypeScript",
    proficiency: 80,
    icon: "integration_instructions",
    module: "FE_LANG",
    category: "FRONTEND",
  },
  {
    name: "Redux Toolkit / Zustand",
    proficiency: 85,
    icon: "settings_system_daydream",
    module: "FE_STATE",
    category: "FRONTEND",
  },
  {
    name: "HTML5 / CSS3 / SCSS",
    proficiency: 95,
    icon: "html",
    module: "FE_BASE",
    category: "FRONTEND",
  },
  {
    name: "Material UI / Shadcn",
    proficiency: 85,
    icon: "widgets",
    module: "FE_LIB",
    category: "FRONTEND",
  },
  {
    name: "TanStack Query / SWR",
    proficiency: 80,
    icon: "sync",
    module: "FE_DATA",
    category: "FRONTEND",
  },
  {
    name: "React Native CLI",
    proficiency: 60,
    icon: "phone_iphone",
    module: "FE_MOBILE",
    category: "FRONTEND",
  },

  // BACKEND
  {
    name: "Node.js / Express / MongoDB",
    proficiency: 92,
    icon: "dns",
    module: "BE_JS",
    category: "BACKEND",
  },
  {
    name: "Python / FastAPI / Django",
    proficiency: 75,
    icon: "terminal",
    module: "BE_PY",
    category: "BACKEND",
  },
  {
    name: "PHP / MySQL",
    proficiency: 55,
    icon: "php",
    module: "BE_PHP",
    category: "BACKEND",
  },
  {
    name: "NestJS / Prisma / Inversify",
    proficiency: 60,
    icon: "account_tree",
    module: "BE_NEST",
    category: "BACKEND",
  },
  {
    name: "MySQL / PostgreSQL / Prisma",
    proficiency: 60,
    icon: "table_chart",
    module: "BE_SQL",
    category: "BACKEND",
  },
  {
    name: "ServiceNow (Portal, Flow Designer)",
    proficiency: 78,
    icon: "work",
    module: "BE_SERVICENOW",
    category: "BACKEND",
  },
  {
    name: "WebSockets / REST APIs",
    proficiency: 85,
    icon: "http",
    module: "BE_API",
    category: "BACKEND",
  },
  {
    name: "Docker / Linux / DevOps",
    proficiency: 75,
    icon: "cloud_queue",
    module: "OPS_CONT",
    category: "BACKEND",
  },
  {
    name: "Git / GitHub",
    proficiency: 92,
    icon: "commit",
    module: "OPS_VCS",
    category: "BACKEND",
  },
  {
    name: "AI Tools (Cursor, Gemini CLI, Copilot, Qwen)",
    proficiency: 80,
    icon: "auto_awesome",
    module: "OPS_AI",
    category: "BACKEND",
  },
];
