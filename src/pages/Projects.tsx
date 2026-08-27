import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import Layout from "../components/layout/Layout";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "AI Chat Application",
    description:
      "Real-time chat application powered by AI for intelligent responses and natural language processing.",
    image: "/placeholder.svg",
    tags: ["TypeScript", "OpenAI", "WebSocket", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Dashboard",
    description:
      "Analytics dashboard for tracking portfolio performance with interactive charts and real-time data.",
    image: "/placeholder.svg",
    tags: ["React", "D3.js", "Firebase", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 4,
    title: "Task Management App",
    description:
      "Collaborative task management tool with drag-and-drop, real-time updates, and team features.",
    image: "/placeholder.svg",
    tags: ["Next.js", "Prisma", "tRPC", "Supabase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
    image: "/placeholder.svg",
    tags: ["React", "OpenWeather API", "Mapbox", "PWA"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 6,
    title: "Blog Platform",
    description:
      "Modern blogging platform with markdown support, SEO optimization, and content management.",
    image: "/placeholder.svg",
    tags: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

const Projects = () => {
  return (
    <Layout>
      <div className="min-h-screen px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-2">
              <Folder className="w-6 h-6 text-primary" />
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} featured />
                ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-2">
              <Folder className="w-6 h-6 text-primary" />
              Other Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
