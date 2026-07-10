export type ProfileLink = {
  label: string;
  href: string;
};

export type FocusArea = {
  title: string;
  description: string;
};

export type JourneyEntry = {
  title: string;
  period: string;
  items: string[];
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const site = {
  url: "https://lioryanow.vercel.app",
  name: "Lior Yanwo",
  repo: "https://github.com/Lioryanwo/personal-website",
};

export const profile = {
  name: "Lior Yanwo",
  title: "Computer Science Student · AI & ML Engineer in the making",
  location: "Israel",
  tagline:
    "Third-year CS student at HIT building intelligent systems — from RAG security research and reinforcement-learning agents to computer-vision pipelines and full-stack apps.",
  bio: [
    "I'm Lior Yanwo, a third-year Computer Science student at HIT — Holon Institute of Technology. I'm interested in the point where artificial intelligence, research, and software engineering meet.",
    "My work includes RAG security research, reinforcement learning, computer vision, and full-stack development. I enjoy understanding how intelligent systems work internally, identifying their limitations, and turning ideas into working software.",
    "My goal is to become an AI engineer who combines strong technical foundations with practical product development.",
  ],
  now: {
    heading: "Third-year Computer Science student at HIT",
    text: "Currently researching retrieval-stage defenses for RAG systems, training reinforcement-learning agents in PyTorch, and shipping this site with Next.js. Looking for opportunities to apply AI research to real products.",
  },
  email: "lioryanow@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/Lioryanwo" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lior-yanwo-0537b6345/",
    },
    { label: "Email", href: "mailto:lioryanow@gmail.com" },
  ] satisfies ProfileLink[],
  focusAreas: [
    {
      title: "AI security & RAG systems",
      description:
        "I research retrieval-stage attacks and defenses in Retrieval-Augmented Generation systems, combining dense retrieval, BM25, reranking, and Reverse-QA verification.",
    },
    {
      title: "Machine learning & reinforcement learning",
      description:
        "I build intelligent agents and learning pipelines, including a Deep Q-Learning agent for Snake using PyTorch and advanced training techniques.",
    },
    {
      title: "Computer vision",
      description:
        "I develop visual inspection and scene-understanding systems using classical image processing, object detection, segmentation, and generative methods.",
    },
    {
      title: "Full-stack engineering",
      description:
        "I build responsive web applications with Next.js, React, TypeScript, Tailwind CSS, GitHub, and Vercel.",
    },
  ] satisfies FocusArea[],
  journey: [
    {
      title: "B.Sc. Computer Science · HIT",
      period: "2023 — Present",
      items: [
        "Third-year Computer Science student.",
        "Focused on artificial intelligence, deep learning, algorithms, and software engineering.",
        "Building research-oriented and production-style projects alongside academic studies.",
      ],
    },
    {
      title: "RAG Security Research Project",
      period: "2026",
      items: [
        "Investigated semantic spoofing attacks against RAG retrieval pipelines.",
        "Compared Dense Retrieval, BM25, and Hybrid retrieval approaches.",
        "Developed retrieval-stage defenses using reranking and Reverse-QA signals.",
      ],
    },
    {
      title: "Autonomous Snake RL Agent",
      period: "2026",
      items: [
        "Built a Deep Q-Learning agent for the Snake environment.",
        "Improved state representation, neural-network architecture, and training stability.",
        "Evaluated the performance of multiple agent versions.",
      ],
    },
    {
      title: "Computer Vision Projects",
      period: "2026",
      items: [
        "Built a bottle-defect inspection pipeline using the MVTec AD dataset.",
        "Worked with image registration, preprocessing, morphology, and quantitative evaluation.",
        "Explored street-parking detection with YOLO and diffusion-based inpainting on KITTI.",
      ],
    },
  ] satisfies JourneyEntry[],
  skillGroups: [
    {
      category: "Languages",
      skills: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL"],
    },
    {
      category: "AI & machine learning",
      skills: [
        "PyTorch",
        "Deep Learning",
        "Reinforcement Learning",
        "NLP",
        "RAG",
        "Computer Vision",
      ],
    },
    {
      category: "Retrieval & data",
      skills: ["FAISS", "BM25", "Dense Retrieval", "Hybrid Retrieval", "Reranking"],
    },
    {
      category: "Web development",
      skills: ["Next.js", "React", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      category: "Tools & deployment",
      skills: ["Git", "GitHub", "Vercel", "VS Code", "AWS"],
    },
  ] satisfies SkillGroup[],
};
