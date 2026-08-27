import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

const ProjectCard = ({ project, index, featured = false }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? -5 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
        className={`glass rounded-2xl overflow-hidden neon-border transition-all duration-300 ${
          isHovered ? "neon-glow-strong" : ""
        }`}
      >
        {/* Image */}
        <div className={`relative overflow-hidden ${featured ? "h-48" : "h-40"}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary text-primary-foreground rounded-full neon-glow hover:scale-110 transition-transform"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 hover:scale-110 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className={`font-display font-bold mb-2 ${featured ? "text-xl" : "text-lg"}`}>
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
