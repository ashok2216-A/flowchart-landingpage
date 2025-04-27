import React from "react";
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Instant Visualization",
    description: "Generate flowcharts in seconds with just a prompt. Save time and move from idea to action without barriers.",
    icon: <CheckCircle className="w-7 h-7 text-brand-blue" />
  },
  {
    title: "Collaboration Built-In",
    description: "Invite teammates to review, edit, and comment—making diagramming a team sport, not a solo task.",
    icon: <CheckCircle className="w-7 h-7 text-brand-blue" />
  },
  {
    title: "Beautiful, Clear Design",
    description: "Every diagram is polished, accessible, and customizable, so your ideas always shine.",
    icon: <CheckCircle className="w-7 h-7 text-brand-blue" />
  },
  {
    title: "Secure & Reliable",
    description: "With safe cloud storage and exports, your designs are always at your fingertips.",
    icon: <CheckCircle className="w-7 h-7 text-brand-blue" />
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-brand-accent-purple/5 dark:bg-brand-accent-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

    <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
        <h2 className="section-title">Why Choose Ask Flow Chart?</h2>
          <p className="section-subtitle">
            Our AI-powered platform offers unique benefits that set us apart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Card 1 */}
          <div className="border border-brand-blue/30 hover:border-brand-blue/70 bg-background/60 backdrop-blur-lg p-6 rounded-xl group transition-all duration-300 hover:shadow-md relative overflow-hidden">
            {/* Blue edge glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
            </div>
            <div className="size-14 rounded-lg bg-gradient-to-br from-brand-accent-yellow/20 to-brand-accent-yellow/10 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-brand-accent-yellow">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Unmatched Simplicity</h3>
            <p className="text-muted-foreground">
              Create complex flowcharts in seconds with our intuitive AI. Just describe what you want, 
              and watch your diagrams come to life without manual formatting.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-brand-blue/30 hover:border-brand-blue/70 bg-background/60 backdrop-blur-lg p-6 rounded-xl group transition-all duration-300 hover:shadow-md relative overflow-hidden">
            {/* Blue edge glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
            </div>
            <div className="size-14 rounded-lg bg-gradient-to-br from-brand-accent-purple/20 to-brand-accent-purple/10 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-brand-accent-purple">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Professional Results</h3>
            <p className="text-muted-foreground">
              Get presentation-ready flowcharts with consistent styling, perfect spacing, 
              and beautiful themes that impress colleagues and clients alike.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-brand-blue/30 hover:border-brand-blue/70 bg-background/60 backdrop-blur-lg p-6 rounded-xl group transition-all duration-300 hover:shadow-md relative overflow-hidden">
            {/* Blue edge glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
            </div>
            <div className="size-14 rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-brand-blue">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Time Efficiency</h3>
            <p className="text-muted-foreground">
              Reduce diagram creation time by up to 80%. What used to take hours 
              now takes minutes, freeing you to focus on strategic work.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border border-brand-blue/30 hover:border-brand-blue/70 bg-background/60 backdrop-blur-lg p-6 rounded-xl group transition-all duration-300 hover:shadow-md relative overflow-hidden">
            {/* Blue edge glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
            </div>
            <div className="size-14 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-green-500">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Seamless Updates</h3>
            <p className="text-muted-foreground">
              Make changes instantly with natural language. Modify your flowcharts 
              by simply telling the AI what to change, without redoing your work.
            </p>
          </div>

          {/* Card 5 */}
          <div className="border border-brand-blue/30 hover:border-brand-blue/70 bg-background/60 backdrop-blur-lg p-6 rounded-xl group transition-all duration-300 hover:shadow-md relative overflow-hidden">
            {/* Blue edge glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
            </div>
            <div className="size-14 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/10 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-orange-500">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Multi-Format Export</h3>
            <p className="text-muted-foreground">
              Export your diagrams in multiple formats suitable for any use case, 
              from presentations and documents to web pages and interactive dashboards.
        </p>
      </div>

          {/* Card 6 */}
          <div className="border border-brand-blue/30 hover:border-brand-blue/70 bg-background/60 backdrop-blur-lg p-6 rounded-xl group transition-all duration-300 hover:shadow-md relative overflow-hidden">
            {/* Blue edge glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
            </div>
            <div className="size-14 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-500/10 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-pink-500">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Team Collaboration</h3>
            <p className="text-muted-foreground">
              Work together seamlessly with your team. Share, edit, and iterate 
              on flowcharts in real-time, ensuring everyone stays aligned.
            </p>
          </div>
      </div>
    </div>
  </section>
);
}
