import React from "react";
import { FaSlack, FaGithub, FaDropbox, FaFigma } from "react-icons/fa";

const integrations = [
  {
    icon: <FaSlack className="w-8 h-8 text-[#6ECADC]" />,
    name: "Slack",
    description: "Share flowcharts to your team conversations.",
  },
  {
    icon: <FaGithub className="w-8 h-8 text-[#24292F] dark:text-white" />,
    name: "GitHub",
    description: "Auto-embed diagrams into your README docs.",
  },
  {
    icon: <FaDropbox className="w-8 h-8 text-[#007EE5]" />,
    name: "Dropbox",
    description: "Securely sync and access diagrams from anywhere.",
  },
  {
    icon: <FaFigma className="w-8 h-8 text-[#A259FF]" />,
    name: "Figma",
    description: "Drag and drop into design files.",
  },
];

export const IntegrationsSection = () => (
  <section className="py-20 md:py-28 overflow-hidden relative">
    {/* Background Elements */}
    <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
      {/* <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-brand-accent-purple/5 dark:bg-brand-accent-purple/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-[10%] -left-[10%] w-[30%] h-[30%] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div> */}
    </div>
    
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="section-title">Works With Your Favorite Tools</h2>
        <p className="section-subtitle">
          Easily connect and export your flowcharts to the tools you already use.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {integrations.map((i, idx) => (
          <div
            key={idx}
            className="bg-background/60 backdrop-blur-md border border-brand-blue/30 hover:border-brand-blue rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-300 hover:-translate-y-2 group relative"
          >
            {/* Coming Soon Badge */}
            <div className="absolute top-3 right-3">
              <span className="bg-brand-blue text-xs font-semibold text-white px-2 py-1 rounded-full animate-pulse">
                Coming Soon
              </span>
            </div>
            
            {/* Blue edge glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
            </div>
            
            <div className="mb-4 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-accent-cyan/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {i.icon}
            </div>
            <div className="font-semibold mb-2">{i.name}</div>
            <div className="text-sm text-muted-foreground">{i.description}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
