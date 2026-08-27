import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap, Download } from "lucide-react";
import Layout from "../components/layout/Layout";

const timeline = [
  {
    year: "2024",
    title: "Senior Software Engineer",
    company: "Tech Company",
    description: "Leading development of scalable web applications and mentoring junior developers.",
    icon: Briefcase,
  },
  {
    year: "2022",
    title: "Software Engineer",
    company: "Startup Inc",
    description: "Built full-stack applications using React, Node.js, and cloud technologies.",
    icon: Briefcase,
  },
  {
    year: "2020",
    title: "Bachelor's in Computer Science",
    company: "University Name",
    description: "Graduated with honors, specialized in software engineering and AI.",
    icon: GraduationCap,
  },
];

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass rounded-3xl p-8 neon-border relative overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center neon-glow">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>

                <h2 className="text-2xl font-display font-bold text-center mb-2">
                  Your Name
                </h2>
                <p className="text-primary font-mono text-center mb-4">
                  Software Engineer
                </p>

                <div className="flex items-center justify-center gap-4 text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Location
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate software engineer with 4+ years of experience building
                  web applications. I love turning complex problems into simple, beautiful,
                  and intuitive solutions. When I'm not coding, you'll find me exploring
                  new technologies, contributing to open source, or sharing knowledge
                  through technical writing.
                </p>

                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold neon-glow hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </motion.div>

            {/* Timeline Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                My Journey
              </h3>

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="relative pl-8 border-l-2 border-primary/30"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-primary rounded-full neon-glow" />
                    
                    <div className="glass rounded-xl p-6 neon-border hover:bg-primary/5 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-mono text-primary">
                            {item.year}
                          </span>
                          <h4 className="text-lg font-semibold mt-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {item.company}
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
