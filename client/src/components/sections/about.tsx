import { motion } from "framer-motion";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "9.41", label: "CGPA (Gold Medalist)" },
  { value: "2+", label: "Years Experience" },
  { value: "5+", label: "Projects Completed" },
  { value: "IEEE", label: "Published Research" },
];

const skills = [
  "Python", "Kotlin", "Flask", "Azure OpenAI", "LangChain"
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About <span className="text-accent">Me</span>
        </motion.h2>
        
        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const isIEEE = stat.label === "Published Research";
            const isCGPA = stat.label === "CGPA (Gold Medalist)";
            const isExperience = stat.label === "Years Experience";
            const isProjects = stat.label === "Projects Completed";
            
            if (isIEEE) {
              return (
                <a
                  key={index}
                  href="https://ieeexplore.ieee.org/author/798879617970690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GlassmorphismCard className="p-6 text-center hover:scale-105 transition-transform cursor-pointer">
                    <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </GlassmorphismCard>
                </a>
              );
            }
            
            if (isCGPA || isExperience || isProjects) {
              const getSectionId = () => {
                if (isCGPA) return "education";
                if (isExperience) return "experience";
                if (isProjects) return "projects";
                return "";
              };
              
              return (
                <div key={index} onClick={() => scrollToSection(getSectionId())} className="cursor-pointer">
                  <GlassmorphismCard className="p-6 text-center hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </GlassmorphismCard>
                </div>
              );
            }
            
            return (
              <GlassmorphismCard key={index} className="p-6 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </GlassmorphismCard>
            );
          })}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern tech interface with AI dashboard" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Computer Applications Graduate & GenAI Specialist</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Software Developer and GenAI Specialist with a Gold Medal in Computer Applications from Amity University Gurugram. Currently working at Cubastion Consulting, I specialize in developing AI-powered enterprise solutions using cutting-edge technologies like Python, Flask, Kotlin, Azure OpenAI, and LangChain.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My expertise spans across backend development, Android app engineering, and GenAI technologies. I've published research in IEEE conferences and have been recognized with multiple awards for my innovative work in artificial intelligence and software development.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-secondary-blue/20 text-secondary-blue px-4 py-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
