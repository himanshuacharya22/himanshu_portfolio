import { motion } from "framer-motion";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const currentRole = {
  title: "Software Developer (GTE) & Intern",
  company: "Cubastion Consulting",
  location: "Gurugram, Haryana",
  period: "Aug 2024 – Present",
  status: "Current",
  projects: [
    {
      title: "GenAI Chatbot Backend (RAG)",
      description: "Developed scalable Python/Flask backend for AI chatbot helping employees resolve technical queries",
      color: "border-accent"
    },
    {
      title: "System Architecture",
      description: "Implemented RAG pipeline with LangChain and LangGraph, Azure OpenAI integration",
      color: "border-secondary-blue"
    },
    {
      title: "Document Search & Indexing",
      description: "Managed large technical manuals in Azure Blob Storage with Azure AI Search",
      color: "border-purple-400"
    }
  ]
};

const previousRoles = [
  {
    title: "Android Developer Intern",
    company: "Pelagian Softwares",
    period: "Jun 2023 – Aug 2023",
    tasks: [
      "Native Android app development with Kotlin",
      "Camera integration and permissions",
      "Backend API integration"
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Sunarc Technologies",
    period: "Jul 2022 – Sep 2022",
    tasks: [
      "Full-stack mobile app development",
      "Python Flask backend with REST APIs",
      "Room DB for offline data management"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-r from-primary-dark to-dark-slate">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Professional <span className="text-accent">Experience</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Current Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlassmorphismCard className="p-8 mb-8 hover:scale-[1.02] transition-transform">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">{currentRole.title}</h3>
                  <h4 className="text-xl text-white mb-2">{currentRole.company}</h4>
                  <div className="flex flex-col md:flex-row gap-2 text-gray-400">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {currentRole.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {currentRole.period}
                    </div>
                  </div>
                </div>
                <Badge className="bg-green-500/20 text-green-400 mt-4 md:mt-0">
                  {currentRole.status}
                </Badge>
              </div>
              <div className="space-y-4">
                {currentRole.projects.map((project, index) => (
                  <div key={index} className={`border-l-4 ${project.color} pl-6`}>
                    <h5 className="font-semibold text-white mb-2">{project.title}</h5>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </GlassmorphismCard>
          </motion.div>

          {/* Previous Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {previousRoles.map((role, index) => (
              <GlassmorphismCard key={index} className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{role.title}</h3>
                <h4 className="text-secondary-blue mb-2">{role.company}</h4>
                <p className="text-gray-400 text-sm mb-4">{role.period}</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  {role.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>• {task}</li>
                  ))}
                </ul>
              </GlassmorphismCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
