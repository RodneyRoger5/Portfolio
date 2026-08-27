import { motion } from "framer-motion";
import { ArrowDown, Download, Shield, Globe, Smartphone, Server, Cloud, Router, Target, Mail as MailIcon, Github, Linkedin, ExternalLink, Calendar, Clock, Award, Briefcase, GraduationCap, MapPin, BookOpen } from "lucide-react";
import Layout from "../components/layout/Layout";
import Hero3DScene from "../components/effects/Hero3DScene";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";
import certCEH from "@/assets/cert-ceh.png";
import certEWPTX from "@/assets/cert-ewptx.png";

// Skills Data
const skills = [
  { name: "Web & API VAPT", icon: Globe, count: 177 },
  { name: "Mobile VAPT", icon: Smartphone, count: 60 },
  { name: "Infrastructure VAPT", icon: Server, count: 30 },
  { name: "Cloud VAPT", icon: Cloud, count: 5 },
  { name: "Thick-Client VAPT", icon: Router, count: 5 },
  { name: "IoT VAPT", icon: Shield, count: 6 },
  { name: "DDoS Simulation", icon: Target, count: 2, label: "Organization Tested" },
  { name: "Phishing Simulation", icon: MailIcon, count: 2, label: "Organization Tested" },
];

// Certifications Data
const certifications = [
  { name: "CEH", fullName: "Certified Ethical Hacker", issuer: "EC-Council", image: certCEH },
  { name: "eWPTX", fullName: "Web Penetration Tester eXtreme", issuer: "INE Security", image: certEWPTX },
];

// Projects Data
const projects = [
  {
    id: 1,
    title: "AutoScanX",
    description: "Automated security scanning tool for comprehensive vulnerability assessment across web applications and APIs.",
    tags: ["Python", "Security", "Automation", "VAPT"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Security Header Checker",
    description: "Tool to analyze and validate HTTP security headers for web applications to ensure proper security configurations.",
    tags: ["Security", "Web", "Headers", "Analysis"],
    liveUrl: "#",
    featured: false,
  },
];

// Articles Data
const articles = [
  {
    id: 1,
    title: "Linux Diagnostics Toolbox",
    description: "A comprehensive guide to essential Linux diagnostic tools for system administrators and security professionals.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Linux", "Security", "DevOps"],
    url: "https://medium.com/@yourusername/linux-diagnostics-toolbox",
  },
  {
    id: 2,
    title: "Tabnabbing: The Silent Threat",
    description: "Understanding the tabnabbing attack vector and how to protect your web applications from this subtle but dangerous vulnerability.",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["Security", "Web", "Phishing"],
    url: "https://medium.com/@yourusername/tabnabbing-the-silent-threat",
  },
];

// Timeline Data
const timeline = [
  {
    year: "May 2025 – Present",
    title: "Senior Security Analyst",
    company: "StrongBox IT – Cybersecurity Consulting",
    description: "Leading penetration testing engagements across web, mobile, network, API, IoT, and wireless systems. Providing strategic security recommendations to enterprise clients.",
    icon: Briefcase,
  },
  {
    year: "Oct 2022 – May 2025",
    title: "Cyber Security Analyst",
    company: "StrongBox IT – Cybersecurity Consulting",
    description: "Conducted comprehensive vulnerability assessments and penetration testing across diverse platforms. Developed expertise in multi-domain security testing.",
    icon: Briefcase,
  },
  {
    year: "Nov 2021 – Jun 2024",
    title: "Master's Degree – Cyber Forensic and Information Security",
    company: "University of Madras",
    description: "Specialized in advanced cybersecurity concepts, digital forensics, and information security management.",
    icon: GraduationCap,
  },
  {
    year: "Jun 2018 – Apr 2021",
    title: "Bachelor's Degree – Computer Science",
    company: "Loyola College",
    description: "Foundation in computer science with focus on programming, networking, and security fundamentals.",
    icon: GraduationCap,
  },
];

// Contact Data
const contactLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/yourusername" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/yourusername" },
  { name: "Email", icon: MailIcon, url: "mailto:your.email@example.com" },
];

const SinglePage = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* Home Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Hero3DScene />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-mono text-primary bg-primary/10 rounded-full neon-border">
              &lt;Security Analyst /&gt;
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
            <span className="text-gradient neon-text">Rodney Roger</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Results-driven security analyst with expertise in penetration testing across web, mobile, network, API, IoT, and wireless systems.
          </motion.p>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("about")}
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

      {/* About Section */}
      <section id="about" className="min-h-screen px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass rounded-3xl p-8 neon-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden neon-glow border-2 border-primary/30">
                    <img 
                      src={profilePhoto} 
                      alt="Rodney Roger" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-center mb-2">
                  Rodney Roger
                </h3>
                <p className="text-primary font-mono text-center mb-4">
                  Senior Security Analyst
                </p>

                <div className="flex items-center justify-center gap-4 text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    StrongBox IT
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Passionate and results-driven Senior Security Analyst with 3+ years of experience specializing in penetration testing across diverse domains. Expertise spans web applications, mobile applications, networks, APIs, IoT, and wireless systems. Proficient in identifying vulnerabilities, exploiting weaknesses, and providing strategic recommendations to fortify digital infrastructures against cyber threats. Currently serving at StrongBox IT – Cybersecurity Consulting, leading security assessments and mentoring junior analysts.
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="relative pl-8 border-l-2 border-primary/30"
                  >
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
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expertise in security assessment across multiple domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 neon-border hover:neon-glow transition-all duration-300 text-center"
              >
                <div className="p-4 bg-primary/10 rounded-xl neon-glow w-fit mx-auto mb-4">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold mb-2">{skill.name}</h3>
                <p className="text-3xl font-mono text-primary font-bold">{skill.count}</p>
                <p className="text-sm text-muted-foreground">
                  {(skill as any).label || "Applications Tested"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional certifications validating security expertise
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-3xl p-6 neon-border hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all duration-300 text-center group cursor-pointer"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden bg-white/10 p-4 group-hover:bg-white/20 transition-colors">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-2">{cert.name}</h3>
                <p className="text-sm text-foreground font-medium mb-1">{cert.fullName}</p>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              More certifications coming soon...
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Security tools and projects I've developed
            </p>
          </motion.div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Featured Project
            </h3>
            {projects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="glass rounded-2xl p-8 neon-border hover:neon-glow transition-all duration-300">
                <h4 className="text-2xl font-display font-bold mb-4">{project.title}</h4>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm font-mono bg-primary/10 text-primary rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              </div>
            ))}
          </motion.div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.filter(p => !p.featured).map((project) => (
                <div key={project.id} className="glass rounded-2xl p-6 neon-border hover:neon-glow transition-all duration-300">
                  <h4 className="text-xl font-display font-bold mb-3">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="min-h-screen px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Security insights and technical write-ups
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass rounded-2xl p-6 neon-border hover:neon-glow-strong transition-all duration-300"
              >
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
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

                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                  {article.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{article.description}</p>

                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="https://medium.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold neon-glow hover:bg-primary/90 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              View All Articles
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's connect and discuss security
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 neon-border"
          >
            <div className="flex flex-wrap justify-center gap-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center gap-3 p-6 bg-secondary/30 rounded-2xl hover:bg-primary/10 hover:neon-glow transition-all group min-w-[140px]"
                >
                  <link.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-lg font-semibold">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="glass rounded-2xl p-6 neon-border text-center mt-8"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="font-semibold text-primary">Available for Work</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Currently open to security consulting and penetration testing opportunities.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SinglePage;
