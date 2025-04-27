import React from "react";
import { Button } from "./ui/button";
import { AnimatedGradient } from "./AnimatedGradients";

export const HeroSection = () => {
  return (
    <section className="pt-28 pb-24 md:pt-32 md:pb-32 lg:pt-40 lg:pb-40 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-1 left-0 w-full h-full overflow-hidden -z-10">
      <AnimatedGradient variant="blue" position="top-left" size="xl" />
    </div>
    <div className="absolute top-1 left-80 w-full h-full overflow-hidden -z-10">
      <AnimatedGradient variant="cyan" position="top-right" size="lg" delay={1} />
    </div>
    <div className="absolute top-1 left-0 w-full h-full overflow-hidden -z-10">
      <AnimatedGradient variant="purple" position="center" size="sm" delay={2} className="opacity-30" />
    </div>


      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          {/* Text Content - Left Column */}
          <div className="lg:max-w-2xl animate-fade-in">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-medium text-sm mb-6">
                AI-Powered Flowchart Generation
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Transform <span className="text-gradient">Ideas</span> into <br /> 
              Visual <span className="text-gradient">Flowcharts</span>
            </h1>

            <p className="text-l md:text-l text-muted-foreground mb-8 max-w-xl" style={{ animationDelay: "0.1s" }}>
              AI-powered flowchart generation in seconds. From text to visual diagrams with just a few clicks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10" style={{ animationDelay: "0.2s" }}>
              {/* Feature 1 */}
              <div className="feature-box group">
                <div className="icon-container bg-brand-blue/10 group-hover:bg-brand-blue/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                </div>
                <div>
                  <h3 className="feature-title group-hover:text-brand-blue">Natural Language Input</h3>
                  <p className="text-muted-foreground">Simply describe your process in plain text and watch it transform into a flowchart.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="feature-box group">
                <div className="icon-container bg-brand-accent-purple/10 group-hover:bg-brand-accent-purple/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent-purple"><circle cx="12" cy="12" r="10"/><polyline points="16 12 12 8 8 12"/><line x1="12" y1="16" x2="12" y2="8"/></svg>
                </div>
                <div>
                  <h3 className="feature-title group-hover:text-brand-accent-purple">One-Click Export</h3>
                  <p className="text-muted-foreground">Download in multiple formats including PNG, SVG, and PDF for easy sharing.</p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="feature-box group">
                <div className="icon-container bg-brand-accent-cyan/10 group-hover:bg-brand-accent-cyan/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent-cyan"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="M8 15h8"/></svg>
                </div>
                <div>
                  <h3 className="feature-title group-hover:text-brand-accent-cyan">Smart Templates</h3>
                  <p className="text-muted-foreground">Choose from dozens of pre-built templates for common business processes.</p>
                </div>
              </div>
              
              {/* Feature 4 */}
              <div className="feature-box group">
                <div className="icon-container bg-brand-blue/10 group-hover:bg-brand-blue/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>
                </div>
                <div>
                  <h3 className="feature-title group-hover:text-brand-blue">Collaborative Editing</h3>
                  <p className="text-muted-foreground">Work together with your team in real-time to refine and perfect your flowcharts.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8" style={{ animationDelay: "0.3s" }}>
              <Button variant="gradient" size="lg" className="rounded-full text-base">
                Generate Your Flowchart
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-base border border-slate-300 dark:border-slate-700 hover:border-brand-blue dark:hover:border-brand-blue hover:bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-brand-blue"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Free 14-day trial
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-brand-blue"><polyline points="20 6 9 17 4 12"></polyline></svg>
                No credit card required
              </div>
            </div>
          </div>

          {/* Image Container - Right Column */}
          <div className="lg:flex-1 animate-fade-in animate-float" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto rounded-xl overflow-hidden border border-slate-700/20 bg-slate-800/10 backdrop-blur-sm group transition-all duration-500">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-brand-accent-purple/10 to-brand-accent-cyan/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Animated corner highlights */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-brand-blue/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brand-accent-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }}></div>
              
              {/* Animated Edge Glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent animate-pulse-slow"></div>
              <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-accent-purple/50 to-transparent animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-accent-cyan/50 to-transparent animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-brand-blue/50 to-transparent animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
              
              <img 
                src="https://cdn.dribbble.com/userupload/14199207/file/original-3078f1c99322ad81abe46c693a08e384.jpg?resize=1600x1200&vertical=center" 
                alt="AI Flowchart Generation Demo" 
                className="w-full h-auto rounded-xl relative z-10 transform group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
