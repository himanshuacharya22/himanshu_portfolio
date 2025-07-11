import { motion } from "framer-motion";
import GlassmorphismCard from "./glassmorphism-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, Smartphone } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  status: string;
  statusColor: string;
  technologies: string[];
  category: string[];
  links: {
    demo?: string;
    github?: string;
    playStore?: string;
  };
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const renderImage = () => {
    if (project.image.startsWith('gradient-')) {
      const gradientClass = project.image === 'gradient-purple-pink' 
        ? 'bg-gradient-to-br from-purple-600 to-pink-600'
        : 'bg-gradient-to-br from-blue-600 to-teal-600';
      
      return (
        <div className={`w-full h-48 ${gradientClass} rounded-xl flex items-center justify-center`}>
          {project.image === 'gradient-purple-pink' ? (
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ) : (
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
            </svg>
          )}
        </div>
      );
    }
    
    return (
      <img 
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-xl"
      />
    );
  };

  const getStatusColor = (color: string) => {
    const colors = {
      green: "bg-green-500/20 text-green-400",
      blue: "bg-blue-500/20 text-blue-400",
      yellow: "bg-yellow-500/20 text-yellow-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getTechColor = (tech: string) => {
    const techColors = {
      Python: "bg-blue-500/20 text-blue-400",
      Flask: "bg-green-500/20 text-green-400",
      LangChain: "bg-purple-500/20 text-purple-400",
      "Azure OpenAI": "bg-yellow-500/20 text-yellow-400",
      TensorFlow: "bg-red-500/20 text-red-400",
      CNN: "bg-green-500/20 text-green-400",
      OpenCV: "bg-purple-500/20 text-purple-400",
      "OpenAI Gym": "bg-green-500/20 text-green-400",
      "Deep Q-Learning": "bg-purple-500/20 text-purple-400",
      "Neural Networks": "bg-red-500/20 text-red-400",
      "Stable Diffusion": "bg-purple-500/20 text-purple-400",
      PyTorch: "bg-red-500/20 text-red-400",
      "Hugging Face": "bg-green-500/20 text-green-400",
      Kotlin: "bg-orange-500/20 text-orange-400",
      Android: "bg-green-500/20 text-green-400",
      "TensorFlow Lite": "bg-blue-500/20 text-blue-400",
      "Face Detection": "bg-purple-500/20 text-purple-400"
    };
    return techColors[tech as keyof typeof techColors] || "bg-gray-500/20 text-gray-400";
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <GlassmorphismCard className="p-6 h-full flex flex-col group">
        <div className="mb-4">
          {renderImage()}
        </div>
        
        <div className="flex items-center mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
              {project.title}
            </h3>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mb-4 flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} className={`${getTechColor(tech)} text-xs`}>
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <Badge className={getStatusColor(project.statusColor)}>
            {project.status}
          </Badge>
          <div className="flex space-x-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="icon" variant="ghost" className="text-accent hover:text-white">
                  <Github className="w-4 h-4" />
                </Button>
              </a>
            )}
            {project.links.demo && (
              <Button size="icon" variant="ghost" className="text-accent hover:text-white">
                {project.title.includes("Mario") ? (
                  <Play className="w-4 h-4" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
              </Button>
            )}
            {project.links.playStore && (
              <Button size="icon" variant="ghost" className="text-accent hover:text-white">
                <Smartphone className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </GlassmorphismCard>
    </motion.div>
  );
}
