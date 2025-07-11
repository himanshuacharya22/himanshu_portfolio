import { motion } from "framer-motion";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";

const certifications = [
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud Skills Boost",
    date: "Oct 2023",
    description: "Comprehensive certification covering fundamentals of generative AI, including large language models, machine learning concepts, and practical applications in modern AI systems.",
    verified: true,
    verificationUrl: "https://www.cloudskillsboost.google/public_profiles/918e2401-438c-4092-b3a1-fa8139880c8a/badges/5512449?trk=public_profile_see-credential"
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud Skills Boost", 
    date: "Oct 2023",
    description: "Specialized certification focusing on large language models, transformer architectures, fine-tuning techniques, and deployment strategies for enterprise applications.",
    verified: true,
    verificationUrl: "https://www.cloudskillsboost.google/public_profiles/918e2401-438c-4092-b3a1-fa8139880c8a/badges/5512638?trk=public_profile_see-credential"
  }
];

export default function Certifications() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-accent">Certifications</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlassmorphismCard className="p-8 hover:scale-105 transition-transform h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500/20 p-4 rounded-xl mr-4">
                    <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                    <p className="text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <Badge className="bg-green-500/20 text-green-400">
                    <Award className="w-3 h-3 mr-1" />
                    Verified • {cert.date}
                  </Badge>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {cert.description}
                </p>
                
                <div className="flex space-x-4">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="glassmorphism border-white/20 text-white hover:bg-white/20">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify
                    </Button>
                  </a>
                </div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
