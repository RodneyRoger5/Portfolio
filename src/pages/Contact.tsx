import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone, ExternalLink, Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com", color: "#ffffff" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com", color: "#0A66C2" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com", color: "#1DA1F2" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com", color: "#E4405F" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com", color: "#FF0000" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent! ✨",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const mailtoLink = `mailto:your.email@example.com?subject=Hello from Portfolio&body=Hi, I'd like to connect with you!`;

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
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's work together and create something amazing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass rounded-3xl p-8 neon-border">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-secondary/50 border-border focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-secondary/50 border-border focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="bg-secondary/50 border-border focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow-strong font-semibold"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="inline-block"
                        >
                          ⏳
                        </motion.span>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>

                {/* Direct Mail Option */}
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Or reach out directly:
                  </p>
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    your.email@example.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Info Card */}
              <div className="glass rounded-3xl p-8 neon-border">
                <h2 className="text-2xl font-display font-bold mb-6">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                    <div className="p-3 bg-primary/10 rounded-lg neon-glow">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">your.email@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                    <div className="p-3 bg-primary/10 rounded-lg neon-glow">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Your City, Country</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-3xl p-8 neon-border">
                <h2 className="text-2xl font-display font-bold mb-6">
                  Connect With Me
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex flex-col items-center gap-2 p-4 bg-secondary/30 rounded-xl hover:bg-primary/10 hover:neon-glow transition-all group"
                    >
                      <social.icon
                        className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors"
                      />
                      <span className="text-sm font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="glass rounded-2xl p-6 neon-border text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
                  <span className="font-semibold text-primary">Available for Work</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently open to freelance projects and full-time opportunities.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
