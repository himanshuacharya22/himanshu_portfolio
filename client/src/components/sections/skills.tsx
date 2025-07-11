import { motion } from "framer-motion";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import SkillBar from "@/components/ui/skill-bar";
import { Code, Layers, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 90, proficiency: "Advanced" },
      { name: "Kotlin", level: 85, proficiency: "Advanced" },
      { name: "Java", level: 75, proficiency: "Intermediate" },
      { name: "SQL", level: 70, proficiency: "Intermediate" }
    ]
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: [
      { name: "Flask", level: 88, proficiency: "Advanced" },
      { name: "LangChain", level: 85, proficiency: "Advanced" },
      { name: "Django", level: 72, proficiency: "Intermediate" },
      { name: "Jetpack Compose", level: 75, proficiency: "Intermediate" }
    ]
  },
  {
    title: "Tools",
    icon: Settings,
    skills: [
      { name: "Azure OpenAI", level: 90, proficiency: "Advanced" },
      { name: "Pandas/NumPy", level: 82, proficiency: "Advanced" },
      { name: "REST APIs", level: 85, proficiency: "Advanced" },
      { name: "Docker", level: 78, proficiency: "Intermediate" }
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-dark to-dark-slate">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Technical <span className="text-accent">Skills</span>
        </motion.h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <GlassmorphismCard className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-accent mr-3" />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <SkillBar 
                        name={skill.name}
                        level={skill.level}
                        proficiency={skill.proficiency}
                      />
                    </motion.div>
                  ))}
                </div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
