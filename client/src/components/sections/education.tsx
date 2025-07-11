import { motion } from "framer-motion";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Manipal University Jaipur",
    period: "2024-2026",
    status: "current",
    description: "Currently pursuing advanced studies in Computer Applications with focus on emerging technologies and software development methodologies."
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Amity University Gurugram",
    period: "2021-2024",
    status: "completed",
    cgpa: "9.41",
    award: "Gold Medalist",
    description: "Graduated with highest honors, specializing in software development, data structures, and emerging technologies."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-accent">Education</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlassmorphismCard 
                className={`p-8 hover:scale-[1.02] transition-transform ${
                  edu.award ? 'border-2 border-accent' : ''
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-accent rounded-full mr-4"></div>
                  <span className="text-gray-400">{edu.period}</span>
                </div>
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                      <GraduationCap className="w-6 h-6 mr-2 text-accent" />
                      {edu.degree}
                    </h3>
                    <p className="text-secondary-blue text-lg mb-4">{edu.institution}</p>
                  </div>
                  
                  {edu.status === 'current' && (
                    <Badge className="bg-blue-500/20 text-blue-400">
                      In Progress
                    </Badge>
                  )}
                </div>

                {edu.award && (
                  <div className="flex items-center mb-4 gap-4">
                    <Badge className="bg-yellow-500/20 text-yellow-400 flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      {edu.award}
                    </Badge>
                    <span className="text-accent font-bold text-lg">CGPA: {edu.cgpa}</span>
                  </div>
                )}

                <p className="text-gray-300">{edu.description}</p>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
