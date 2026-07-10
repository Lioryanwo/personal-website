export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "rag-spoofing-defense",
    title: "RAG Spoofing Defense",
    category: "AI Security",
    description:
      "Research project focused on defending Retrieval-Augmented Generation systems against semantic spoofing attacks using retrieval-stage verification, reranking, and Reverse-QA.",
    tags: ["Python", "RAG", "FAISS", "BM25", "LLMs", "Research"],
    github: "https://github.com/Lioryanwo/rag-injection-guard-nlp",
    featured: true,
  },
  {
    slug: "snake-agent",
    title: "Autonomous Snake RL Agent",
    category: "Deep Learning",
    description:
      "Deep Reinforcement Learning agent that learns to play Snake using DQN, CNN-based spatial state representation, late fusion, replay memory, and PyTorch training loops.",
    tags: ["Python", "PyTorch", "RL", "CNN", "DQN"],
    github: "https://github.com/nadav0912/RF-Snake-game",
    featured: true,
  },
  {
    slug: "parkscope",
    title: "ParkScope",
    category: "Computer Vision · GenAI",
    description:
      "Street-parking detection on the KITTI dataset — YOLO-based vehicle detection combined with diffusion-based inpainting to generate realistic vacant parking spaces.",
    tags: ["Python", "YOLO", "Diffusion Models", "KITTI", "OpenCV"],
    github: "https://github.com/Lioryanwo/street_parking_detection_genai",
  },
  {
    slug: "bottle-inspection",
    title: "Bottle Inspection Pipeline",
    category: "Computer Vision",
    description:
      "Classical computer vision pipeline for bottle defect inspection using image registration, preprocessing, morphological analysis, and quantitative evaluation on the MVTec AD Bottle dataset.",
    tags: ["Python", "OpenCV", "Image Processing", "MVTec AD"],
    github: "https://github.com/Lioryanwo/bottle-inspection-dip-2026",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
