import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Hero3DScene from "../components/effects/Hero3DScene";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Scene */}
        <Hero3DScene />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-mono text-primary bg-primary/10 rounded-full neon-border">
              &lt;Software Engineer /&gt;
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
          >
            <span className="text-foreground">Hello, I'm</span>
            <br />
            <span className="text-gradient neon-text">Your Name</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            I craft exceptional digital experiences through clean code and innovative solutions.
            Passionate about building the future, one line at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link to="/projects">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow-strong font-semibold px-8"
              >
                Explore My Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 neon-border"
              >
                <Mail className="mr-2 w-4 h-4" />
                Get in Touch
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm font-mono">Download Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Home;
