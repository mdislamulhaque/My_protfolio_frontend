import { DeveloperProfile, Skill, Service, Project, Experience, Testimonial } from './types';

export const developerProfile: DeveloperProfile = {
  name: "Mohammad Abdullah",
  title: "AI-Driven Frontend Engineer",
  tagline: "Crafting highly intelligent, performant, and beautiful frontend user interfaces with seamless AI integrations.",
  bio: "I am a passionate Frontend Developer and AI Integration Specialist with over 3 years of professional experience building responsive, intuitive web experiences. By combining state-of-the-art AI tools with modern frontend frameworks and pixel-perfect design systems, I build web applications that are intelligent, high-performing, and accessible.",
  journey: "My journey is focused on the cutting edge of client-side engineering and AI automation. I specialize in designing responsive, lightweight user interfaces, crafting smooth interactive animations, and seamlessly calling and orchestrating APIs (like Google Gemini and ChatGPT) directly into front-end clients.",
  yearsOfExperience: 3,
  projectsCompleted: 52,
  happyClients: 24,
  technologiesCount: 16,
  resumeUrl: "#", // User can link their actual CV
  email: "islamul.net@gmail.com",
  phone: "01640128028",
  location: "Dhaka, Bangladesh (Available for Remote Work)",
  socials: {
    github: "https://github.com/mdislamulhaque",
    linkedin: "https://www.linkedin.com/in/islamul-haque96/",
    twitter: "https://x.com/islamul_net",
    facebook: "https://www.facebook.com/Mabdullahf96"
  }
};

export const skillsData: Skill[] = [
  // AI Tools
  { name: "Gemini API", category: "ai", icon: "Sparkles", proficiency: 96 },
  { name: "ChatGPT", category: "ai", icon: "Bot", proficiency: 95 },
  { name: "Google AI Studio", category: "ai", icon: "Wand2", proficiency: 94 },
  { name: "Lavable AI", category: "ai", icon: "Cpu", proficiency: 88 },
  { name: "Claude AI", category: "ai", icon: "Brain", proficiency: 90 },

  // Frontend
  { name: "React.js", category: "frontend", icon: "Atom", proficiency: 94 },
  { name: "Next.js", category: "frontend", icon: "Layers", proficiency: 90 },
  { name: "TypeScript", category: "frontend", icon: "Code2", proficiency: 88 },
  { name: "JavaScript", category: "frontend", icon: "Braces", proficiency: 92 },
  { name: "Tailwind CSS", category: "frontend", icon: "Palette", proficiency: 95 },
  { name: "HTML5 & CSS3", category: "frontend", icon: "FileCode", proficiency: 96 },
  { name: "Bootstrap", category: "frontend", icon: "LayoutTemplate", proficiency: 85 },

  // Tools
  { name: "Git", category: "tools", icon: "GitBranch", proficiency: 92 },
  { name: "GitHub", category: "tools", icon: "Github", proficiency: 95 },
  { name: "Vite", category: "tools", icon: "Zap", proficiency: 90 },
  { name: "Postman", category: "tools", icon: "Send", proficiency: 88 }
];

export const servicesData: Service[] = [
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description: "Crafting beautiful, accessible, and pixel-perfect responsive user interfaces with modern React and Tailwind CSS. Optimized for core web vitals and fast performance.",
    icon: "Monitor",
    features: ["Component-Driven Architecture", "Tailwind CSS Precision", "Accessible HTML/ARIA", "Interactive animations"]
  },
  {
    id: "ai-integration",
    title: "AI & API Integration",
    description: "Connecting advanced LLMs (Gemini, ChatGPT, AI Studio, Lavable) and complex REST APIs directly to interactive frontend experiences for intelligent automation.",
    icon: "Sparkles",
    features: ["Generative Text & Image UI", "Asynchronous API Hooks", "Dynamic prompt structuring", "Real-time AI responses"]
  },
  {
    id: "react-next-dev",
    title: "React & Next.js Development",
    description: "Developing modern Next.js SPAs and static sites utilizing Server Components, progressive hydration, and optimized routing for premium performance.",
    icon: "Atom",
    features: ["Server-Side Rendering (SSR)", "Incremental Static Regeneration", "Dynamic Route Systems", "SEO optimized layouts"]
  },
  {
    id: "ui-ux-engineering",
    title: "UI/UX Engineering & Animation",
    description: "Designing interactive prototypes and coding smooth micro-interactions, layout transitions, spring motions, and gesture interfaces with Framer Motion.",
    icon: "Wand2",
    features: ["Framer Motion fluid animations", "Interactive state designs", "Custom theme modes", "Slick transitions"]
  },
  {
    id: "responsive-web",
    title: "Responsive Web Design",
    description: "Ensuring your website looks incredible and adapts organically across every device layout: ultra-wide monitors, tablets, and mobile devices.",
    icon: "Smartphone",
    features: ["Mobile-first layouts", "Fluid grids & viewport styling", "Adaptive image assets", "Touch-gesture optimizations"]
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboard Development",
    description: "Feature-rich admin panels with complex client-side data charts, custom data exports, content management (CMS) screens, and user controls.",
    icon: "LayoutDashboard",
    features: ["Interactive Recharts visualizers", "User interface permission layers", "Slick tables & data filters", "Exportable report layouts"]
  }
];

export const projectsData: Project[] = [
  {
    id: "nexas-saas",
    title: "Nexas Generative AI Workspace",
    description: "A comprehensive generative AI workspace frontend. Features real-time AI image prompt UI, automated document analysis screens, and interactive chat synthesis layouts powered by the Gemini API.",
    category: "ai",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "AI Studio"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/nexas/800/600",
    featured: true
  },
  {
    id: "stitch-storefront",
    title: "Stitch E-Commerce Storefront",
    description: "A high-performance online retail storefront built with React and Tailwind CSS. Features advanced product filtering, responsive shopping cart drawer, and complete checkout experience with Stripe elements.",
    category: "frontend",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Git"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/laracart/800/600",
    featured: true
  },
  {
    id: "crypto-bento",
    title: "Cryptocurrency Bento Dashboard",
    description: "An elegant crypto tracker designed with a Bento-grid layout. Displays live-updating tickers, historical price charts using Recharts, asset search, and customizable price-drop alert notifications.",
    category: "react",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Recharts", "Vite", "Git"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/cryptobento/800/600",
    featured: true
  },
  {
    id: "apex-kanban",
    title: "Apex Collaborative Kanban Board",
    description: "A real-time workspace for task management. Features smooth drag-and-drop lists, task checklists, member assignments, live chats on tasks, and robust activity logs. Works fully offline with local-first syncing.",
    category: "frontend",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "motion", "Vite"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/kanban/800/600",
    featured: false
  },
  {
    id: "promptmaster-ai",
    title: "PromptMaster Playground & Dashboard",
    description: "A visual AI prompt manager and playground interface. Allows users to save, catalog, rate, and test prompt variants across different API models, featuring direct Google AI Studio integrations.",
    category: "ai",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Gemini API", "Vite"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/restoapi/800/600",
    featured: false
  },
  {
    id: "vibe-music-spa",
    title: "Vibe Music Streaming Interface",
    description: "A client-side single page app featuring music search, visual equalizers, custom playlist management, seamless transitions, and offline audio caching utilizing HTML5 service workers.",
    category: "frontend",
    tags: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite", "GitHub"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/vibemusic/800/600",
    featured: false
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Frontend Web Developer",
    company: "Vivacombd",
    duration: "2025 - Present",
    description: [
      "Led frontend engineering to design and ship a premium React/Next.js SaaS interface, improving Core Web Vitals and lowering FCP by 35%.",
      "Pioneered TypeScript and component-driven modular systems across all legacy codebases, resulting in a 40% reduction in UI runtime crashes.",
      "Integrated advanced AI APIs (Gemini, ChatGPT) and server endpoints cleanly using modern asynchronous patterns and custom hooks."
    ],
    type: "experience",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Gemini API"]
  },
  
  {
    id: "edu-1",
    role: "Diploma in Computer Science & Engineering",
    company: "TMSS INSTITUTE OF SCIENCE & ICT (TISI)",
    duration: "2018 - 2022",
    description: [
      "Specialized in Software Engineering, Web Systems, and Database Architectures.",
      "Acquired core skills in Data Structures, Algorithms, Object-Oriented Programming, and Relational Database Systems."
    ],
    type: "education",
    tags: ["Computer Science", "Algorithms", "Databases", "Networks"]
  },
  {
    id: "cert-1",
    role: "Web Development Course",
    company: "Programming Hero",
    duration: "2024",
    description: [
      "Professional intensive focus on advanced React patterns, complex client-side state design, animations, and AI model implementations."
    ],
    type: "education",
    tags: ["React.js", "Next.js", "AI Integration", "TypeScript"]
  },
   {
    id: "cert-2",
    role: "Reactive Accelator Course",
    company: "LWS",
    duration: "2024",
    description: [
      "Professional intensive focus on advanced React patterns and Basic to Advance Next.js, complex client-side state design, animations, and AI model implementations."
    ],
    type: "education",
    tags: ["React.js", "Next.js", "AI Integration", "TypeScript"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    role: "Product Director",
    company: "Vortex Technologies",
    content: "Mohammad is an absolute gem of a developer. He took our complex, fragmented wireframes and turned them into a visually stunning, responsive, and insanely fast SaaS dashboard in Next.js. His eye for micro-interactions, layout precision, and clean React code is absolute top-tier.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    id: "test-2",
    name: "Marcus Sterling",
    role: "Founder & CEO",
    company: "Aero Logistics",
    content: "Collaborating with Mohammad on our interactive inventory UI was a seamless experience. He didn't just write clean frontend code; he actively suggested UI/UX improvements that greatly increased user retention. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    role: "Lead Creative",
    company: "Hologram Agency",
    content: "Mohammad bridged the gap between code and design flawlessly. He implemented motion transitions that were incredibly smooth and performant, maintaining our high design fidelity. He responds quickly, works efficiently, and delivers top-tier work.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
];
