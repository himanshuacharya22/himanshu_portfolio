import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";

const filterCategories = ["All", "AI/ML", "Backend", "Android"];

const projects = [
  {
    id: 1,
    title: "Mitsubishi Fuso - GenAI Chatbot",
    description: "Enterprise-grade GenAI chatbot for automated support and documentation lookup with RAG implementation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    status: "In Development",
    statusColor: "green",
    technologies: ["Python", "Flask", "LangChain", "Azure OpenAI"],
    category: ["AI/ML", "Backend"],
    links: {}
  },
  {
    id: 2,
    title: "Brain Tumor Detector",
    description: "Machine Learning model for medical image classification using deep learning and CNN architectures.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    status: "Completed",
    statusColor: "blue",
    technologies: ["Python", "TensorFlow", "CNN", "OpenCV"],
    category: ["AI/ML"],
    links: {
      github: "https://github.com/himanshuacharya22/brain-tumor-detection"
    }
  },
  {
    id: 3,
    title: "AI-based Mario Game Agent",
    description: "Reinforcement Learning agent that learns to play Super Mario Bros using Deep Q-Learning algorithms.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    status: "Completed",
    statusColor: "blue",
    technologies: ["Python", "OpenAI Gym", "Deep Q-Learning", "Neural Networks"],
    category: ["AI/ML"],
    links: {
      github: "https://github.com/himanshuacharya22/reinforcement-learning-Mario"
    }
  },
  {
    id: 4,
    title: "Fine-tune Stable Diffusion",
    description: "Custom image generation project with personalized dataset fine-tuning for AI art creation.",
    image: "gradient-purple-pink",
    status: "Completed",
    statusColor: "blue",
    technologies: ["Python", "Stable Diffusion", "PyTorch", "Hugging Face"],
    category: ["AI/ML"],
    links: {
      github: "https://github.com/himanshuacharya22/fine-tune-stable-diffusion-model"
    }
  },
  {
    id: 5,
    title: "Memories - AI Photo Gallery",
    description: "Android app for automatic photo clustering using face detection and recognition algorithms.",
    image: "gradient-blue-teal",
    status: "Completed",
    statusColor: "blue",
    technologies: ["Kotlin", "Android", "TensorFlow Lite", "Face Detection"],
    category: ["Android", "AI/ML"],
    links: {}
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(project => 
    activeFilter === "All" || project.category.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-dark-slate to-primary-dark">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured <span className="text-accent">Projects</span>
        </motion.h2>
        
        {/* Project Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterCategories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              variant={activeFilter === category ? "default" : "outline"}
              className={
                activeFilter === category
                  ? "bg-accent text-accent-foreground"
                  : "glassmorphism border-white/20 text-white hover:bg-white/20"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
