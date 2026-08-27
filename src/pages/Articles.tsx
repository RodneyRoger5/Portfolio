import { motion } from "framer-motion";
import { Calendar, Clock, ExternalLink, BookOpen } from "lucide-react";
import Layout from "../components/layout/Layout";

const articles = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    description: "Learn the best practices for building React applications that scale with your team and codebase.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "Architecture", "Best Practices"],
    url: "https://medium.com",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "TypeScript Tips for Better Code",
    description: "Discover advanced TypeScript features that will make your code more robust and maintainable.",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["TypeScript", "JavaScript", "Tips"],
    url: "https://dev.to",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Modern CSS Techniques You Should Know",
    description: "Explore the latest CSS features like container queries, :has() selector, and cascade layers.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["CSS", "Frontend", "Web Design"],
    url: "https://medium.com",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Getting Started with Three.js",
    description: "A beginner-friendly guide to creating 3D graphics on the web using Three.js.",
    date: "2023-12-20",
    readTime: "12 min read",
    tags: ["Three.js", "WebGL", "3D"],
    url: "https://dev.to",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "State Management in 2024",
    description: "Comparing different state management solutions and when to use each one.",
    date: "2023-12-15",
    readTime: "9 min read",
    tags: ["React", "State Management", "Redux"],
    url: "https://medium.com",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "API Design Best Practices",
    description: "Learn how to design RESTful APIs that are intuitive, scalable, and developer-friendly.",
    date: "2023-12-10",
    readTime: "7 min read",
    tags: ["API", "Backend", "REST"],
    url: "https://dev.to",
    image: "/placeholder.svg",
  },
];

const Articles = () => {
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
              Featured <span className="text-gradient">Articles</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about software development
            </p>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass rounded-2xl overflow-hidden neon-border hover:neon-glow-strong transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <ExternalLink className="w-5 h-5 text-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold neon-glow hover:bg-primary/90 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              View All Articles
            </a>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Articles;
