import { ReactNode } from "react";
import Navbar from "./Navbar";
import ParticleBackground from "../effects/ParticleBackground";

interface LayoutProps {
  children: ReactNode;
  showParticles?: boolean;
}

const Layout = ({ children, showParticles = true }: LayoutProps) => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden scroll-smooth">
      {/* Background Effects */}
      {showParticles && <ParticleBackground />}
      
      {/* Cyber grid overlay */}
      <div className="fixed inset-0 cyber-grid pointer-events-none" />
      
      {/* Gradient blur accents */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Scanlines overlay */}
      <div className="fixed inset-0 scanlines pointer-events-none" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10 pt-24">
        {children}
      </main>
    </div>
  );
};

export default Layout;
