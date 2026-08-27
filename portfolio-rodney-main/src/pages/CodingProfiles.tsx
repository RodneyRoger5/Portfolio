import { motion } from "framer-motion";
import { Trophy, Star, Target, ExternalLink } from "lucide-react";
import Layout from "../components/layout/Layout";

const codingProfile = {
  name: "HackerRank",
  username: "your_username",
  url: "https://www.hackerrank.com/your_username",
  logo: "🏆",
  stats: [
    { label: "Rank", value: "Top 5%", icon: Trophy },
    { label: "Points", value: "2,500+", icon: Star },
    { label: "Challenges Solved", value: "150+", icon: Target },
  ],
  badges: [
    { name: "Problem Solving", stars: 5, color: "#39FF14" },
    { name: "Python", stars: 4, color: "#39FF14" },
    { name: "JavaScript", stars: 5, color: "#39FF14" },
    { name: "SQL", stars: 4, color: "#39FF14" },
    { name: "30 Days of Code", stars: 5, color: "#39FF14" },
  ],
};

const CodingProfiles = () => {
  return (
    <Layout>
      <div className="min-h-screen px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Coding <span className="text-gradient">Profile</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My competitive programming journey and achievements
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 neon-border"
          >
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8 pb-8 border-b border-border">
              <div className="text-8xl animate-float">{codingProfile.logo}</div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-display font-bold text-primary">
                  {codingProfile.name}
                </h2>
                <p className="text-muted-foreground font-mono">
                  @{codingProfile.username}
                </p>
                <a
                  href={codingProfile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold neon-glow hover:bg-primary/90 transition-colors"
                >
                  View Profile
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {codingProfile.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-primary/5 rounded-xl neon-border"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Badges */}
            <div>
              <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Skill Badges
              </h3>
              <div className="grid gap-4">
                {codingProfile.badges.map((badge, index) => (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors"
                  >
                    <span className="font-medium">{badge.name}</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < badge.stars
                              ? "text-primary fill-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Platforms Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-muted-foreground mt-8"
          >
            More platforms coming soon...
          </motion.p>
        </div>
      </div>
    </Layout>
  );
};

export default CodingProfiles;
