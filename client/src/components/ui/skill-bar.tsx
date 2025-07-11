import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  proficiency: string;
}

export default function SkillBar({ name, level, proficiency }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [level]);

  const getColor = (proficiency: string) => {
    return proficiency === "Advanced" ? "bg-accent" : "bg-secondary-blue";
  };

  const getTextColor = (proficiency: string) => {
    return proficiency === "Advanced" ? "text-accent" : "text-secondary-blue";
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-white">{name}</span>
        <span className={getTextColor(proficiency)}>{proficiency}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div 
          className={`h-2 rounded-full skill-bar ${getColor(proficiency)}`}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
