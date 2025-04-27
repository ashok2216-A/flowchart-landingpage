import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { AnimatedGradient } from "./AnimatedGradients";

// Feature theme icons
const ThemeIcon = () => <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white mb-4 animate-pulse-slow">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
  </div>;
const LayoutIcon = () => <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent-purple to-brand-accent-pink flex items-center justify-center text-white mb-4 animate-pulse-slow">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
  </div>;
const EditIcon = () => <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent-cyan to-brand-blue flex items-center justify-center text-white mb-4 animate-pulse-slow">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M12 2v20M20 16h2M6 16h-2M8 8l-2 2M16 16l-2-2M16 8l-2-2M8 16l-2-2" /></svg>
  </div>;
const ExportIcon = () => <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent-yellow to-brand-accent-red flex items-center justify-center text-white mb-4 animate-pulse-slow">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
  </div>;

// Theme showcase component with animation
const ThemeShowcase = () => {
  const themes = [{
    name: "Modern Blue",
    color: "from-brand-blue to-brand-blue-light"
  }, {
    name: "Vibrant Purple",
    color: "from-brand-accent-purple to-brand-accent-pink"
  }, {
    name: "Ocean Green",
    color: "from-brand-accent-cyan to-teal-500"
  }, {
    name: "Sunset Orange",
    color: "from-brand-accent-red to-brand-accent-yellow"
  }];
  
  const [activeTheme, setActiveTheme] = useState(0);
  
  // Auto-rotate themes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTheme((current) => (current + 1) % themes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return <div className="mt-12 mb-16">
      <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] bg-card rounded-xl p-6 shadow-lg border border-border overflow-hidden group">
        <div className={`absolute inset-0 bg-gradient-to-br ${themes[activeTheme].color} opacity-10 transition-all duration-1000`}></div>
        
        {/* Animated corner gradients */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-brand-blue/20 to-transparent rounded-full blur-xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-tl from-brand-accent-purple/20 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }}></div>
        
        {/* YouTube Video Embed */}
        <div className="relative w-full h-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dAE4YloBUgI"
            title="Flow Chart Magic AI Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>;
};

// Feature icons
const BrainIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const WandIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="m20 8-8 8-4-4" />
    <path d="m16 8-3-3-4 4-5 5 3 3 5-5 4-4Z" />
  </svg>
);

const CursorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="m4 4 7.07 17 2.51-7.39L21 11.07z" />
  </svg>
);

const LayersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="m12.41 1.41 4.3 4.3a1 1 0 0 1 0 1.41l-7 7a1 1 0 0 1-1.41 0l-4.3-4.3a1 1 0 0 1 0-1.41l7-7a1 1 0 0 1 1.41 0Z" />
    <path d="m10.99 10.99 2.83 2.83a1 1 0 0 1 0 1.41l-7 7a1 1 0 0 1-1.41 0l-4.3-4.3a1 1 0 0 1 0-1.41l7-7a1 1 0 0 1 1.41 0Z" />
    <path d="m7.76 16.24 7.07-7.07" />
  </svg>
);

export const FeaturesSection = () => {
  return <section id="features" className="py-16 md:py-24 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-brand-accent-purple/5 dark:bg-brand-accent-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[30%] h-[30%] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">
            Everything you need to create professional flowcharts without the learning curve
          </p>
        </div>

        <ThemeShowcase />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {/* Blue Theme Feature Card */}
          <div className="feature-card animate-slide-in-bottom group border-1.5 border-brand-blue/30 hover:border-brand-blue relative transition-all duration-300" style={{
          animationDelay: "0.1s"
          }}>
            {/* Blue edge glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <ThemeIcon />
            <h3 className="text-xl font-bold mb-2">Customizable Themes</h3>
            <p className="text-muted-foreground">
              Choose from multiple professionally designed themes or create your own to match your brand.
            </p>
          </div>

          {/* Purple Theme Feature Card */}
          <div className="feature-card animate-slide-in-bottom group border-1.5 border-brand-accent-pink/30 hover:border-brand-accent-pink relative transition-all duration-300" style={{
          animationDelay: "0.2s"
          }}>
            {/* Purple edge glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent-pink to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-accent-pink to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent-pink to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-accent-pink to-transparent opacity-70"></div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent-pink/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <LayoutIcon />
            <h3 className="text-xl font-bold mb-2">Smart Layouts</h3>
            <p className="text-muted-foreground">
              Industry-specific templates and intelligent layout algorithms for clean, professional diagrams.
            </p>
          </div>

          {/* Cyan Theme Feature Card */}
          <div className="feature-card animate-slide-in-bottom group border-1.5 border-brand-accent-cyan/30 hover:border-brand-accent-cyan relative transition-all duration-300" style={{
          animationDelay: "0.3s"
          }}>
            {/* Cyan edge glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent-cyan to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-accent-cyan to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent-cyan to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-accent-cyan to-transparent opacity-70"></div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent-cyan/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <EditIcon />
            <h3 className="text-xl font-bold mb-2">Intuitive Editing</h3>
            <p className="text-muted-foreground">
              Drag-and-drop interface makes it easy to refine and customize your AI-generated flowcharts.
            </p>
          </div>

          {/* Yellow/Red Theme Feature Card */}
          <div className="feature-card animate-slide-in-bottom group border-1.5 border-brand-accent-yellow/30 hover:border-brand-accent-yellow relative transition-all duration-300" style={{
          animationDelay: "0.4s"
          }}>
            {/* Yellow edge glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent-yellow to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-accent-yellow to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent-yellow to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-accent-yellow to-transparent opacity-70"></div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent-yellow/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <ExportIcon />
            <h3 className="text-xl font-bold mb-2">Flexible Export</h3>
            <p className="text-muted-foreground">
              Export your flowcharts in multiple formats including PNG, SVG, PDF, and more.
            </p>
          </div>
        </div>
      </div>
    </section>;
};