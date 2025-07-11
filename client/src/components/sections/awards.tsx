import { motion } from "framer-motion";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import { Zap, Trophy, Medal, Star } from "lucide-react";

const awards = [
  {
    title: "Lightning Award",
    organization: "Cubastion Consulting",
    year: "2024",
    description: "Recognized for exceptional performance in backend GenAI architecture development and innovative solutions in enterprise chatbot implementation.",
    icon: Zap,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20"
  },
  {
    title: "Best Research Paper Award",
    organization: "IEEE Conference",
    year: "2023",
    description: "Awarded for outstanding research contribution in artificial intelligence and humanoid interface development at international IEEE conference.",
    icon: Trophy,
    color: "text-red-400",
    bgColor: "bg-red-500/20"
  },
  {
    title: "Gold Medalist",
    organization: "Amity University Gurugram",
    year: "2024",
    description: "Graduated with highest honors achieving 9.41 CGPA in Bachelor of Computer Applications, recognized as the top performer in the graduating class.",
    icon: Medal,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20"
  },
  {
    title: "Academic Excellence",
    organization: "Consistent Performance",
    year: "2021-2024",
    description: "Maintained exceptional academic performance throughout undergraduate studies with consistent high grades and active participation in research activities.",
    icon: Star,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20"
  }
];

export default function Awards() {
  return (
    <section className="py-20 bg-gradient-to-r from-dark-slate to-primary-dark">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Awards & <span className="text-accent">Achievements</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlassmorphismCard className="p-8 hover:scale-105 transition-transform h-full">
                <div className="flex items-center mb-4">
                  <div className={`${award.bgColor} p-4 rounded-xl mr-4`}>
                    <award.icon className={`${award.color} text-2xl w-6 h-6`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{award.title}</h3>
                    <p className="text-gray-400">{award.organization} • {award.year}</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  {award.description}
                </p>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
