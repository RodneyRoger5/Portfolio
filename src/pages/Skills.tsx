import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, Wrench, Palette } from "lucide-react";
import Layout from "../components/layout/Layout";

const skillCategories = [
  {
    name: "Frontend",
    icon: Code,
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Python", level: 75 },
      { name: "GraphQL", level: 80 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    name: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 88 },
      { name: "Redis", level: 75 },
      { name: "Prisma", level: 82 },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 78 },
      { name: "Docker", level: 80 },
      { name: "Vercel", level: 90 },
      { name: "CI/CD", level: 82 },
    ],
  },
  {
    name: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Linux", level: 75 },
    ],
  },
  {
    name: "Design",
    icon: Palette,
    skills: [
      { name: "UI/UX Design", level: 75 },
      { name: "Responsive Design", level: 90 },
      { name: "Animation", level: 80 },
    ],
  },
];

const Skills = () => {
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
              My <span className="text-gradient">Skills</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass rounded-2xl p-6 neon-border hover:neon-glow transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl neon-glow">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold">{category.name}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-primary font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full neon-glow"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
