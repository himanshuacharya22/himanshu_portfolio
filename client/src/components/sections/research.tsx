import { motion } from "framer-motion";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink, Quote } from "lucide-react";

const publications = [
  {
    title: "Amipi: Artificial Intelligence Based Humanoid Interface",
    conference: "IEEE Conference 2023",
    description: "This research paper presents an innovative approach to human-computer interaction through artificial intelligence-based humanoid interfaces. The work explores advanced methodologies for creating more intuitive and responsive AI systems that can better understand and interact with humans in various contexts.",
    award: "Best Paper Award",
    url: "https://ieeexplore.ieee.org/abstract/document/11039360",
    color: "accent"
  },
  {
    title: "Amipi: Artificial Intelligence Based Interactive Humanoid Interface",
    conference: "IEEE Conference 2024",
    description: "This publication extends the research on AI-based interfaces, focusing on enhanced human-computer interaction paradigms. The work contributes to the development of more sophisticated AI systems capable of natural and effective communication with users.",
    award: null,
    url: "https://ieeexplore.ieee.org/abstract/document/10868458",
    color: "secondary-blue"
  }
];

export default function Research() {
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
          Research & <span className="text-accent">Publications</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlassmorphismCard className="p-8 hover:scale-[1.02] transition-transform">
                <div className="flex items-start space-x-6">
                  <div className={`bg-${publication.color}/20 p-4 rounded-xl`}>
                    <FileText className={`text-${publication.color} text-2xl w-8 h-8`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        "{publication.title}"
                      </h3>
                      {publication.award && (
                        <Badge className="bg-yellow-500/20 text-yellow-400">
                          {publication.award}
                        </Badge>
                      )}
                    </div>
                    <p className={`text-${publication.color} text-lg mb-4`}>{publication.conference}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {publication.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={publication.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="glassmorphism border-white/20 text-white hover:bg-white/20">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View on IEEE Xplore
                        </Button>
                      </a>
                      <Button 
                        variant="outline" 
                        className="glassmorphism border-white/20 text-white hover:bg-white/20"
                        onClick={() => {
                          const citationText = `${publication.title}. ${publication.conference}. Available: ${publication.url}`;
                          navigator.clipboard.writeText(citationText).then(() => {
                            // You can add a toast notification here if needed
                            alert('Citation copied to clipboard!');
                          }).catch(() => {
                            // Fallback for older browsers
                            const textArea = document.createElement('textarea');
                            textArea.value = citationText;
                            document.body.appendChild(textArea);
                            textArea.select();
                            document.execCommand('copy');
                            document.body.removeChild(textArea);
                            alert('Citation copied to clipboard!');
                          });
                        }}
                      >
                        <Quote className="w-4 h-4 mr-2" />
                        Cite Paper
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
