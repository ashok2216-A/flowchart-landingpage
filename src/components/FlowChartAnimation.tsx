
import React from "react";

export const FlowChartAnimation = () => {
  return (
    <div className="relative w-full max-w-3xl h-[300px] md:h-[400px] mx-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
      
      {/* Basic animated flowchart elements */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-float">
        <div className="w-40 h-16 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-sm shadow-lg">
          <span>Start Process</span>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: "0.5s" }}>
        <div className="w-44 h-16 rounded-lg bg-brand-accent-purple/20 border border-brand-accent-purple/30 flex items-center justify-center text-sm shadow-lg">
          <span>Analyze Data</span>
        </div>
      </div>
      
      <div className="absolute top-3/4 right-1/3 transform -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-40 h-16 rounded-lg bg-brand-accent-cyan/20 border border-brand-accent-cyan/30 flex items-center justify-center text-sm shadow-lg">
          <span>Generate Results</span>
        </div>
      </div>
      
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full">
        <line x1="25%" y1="30%" x2="50%" y2="50%" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse-slow" />
        <line x1="50%" y1="50%" x2="66%" y2="75%" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
      </svg>
      
      {/* Animated particles */}
      <div className="absolute top-[30%] left-[25%] w-3 h-3 rounded-full bg-gradient-primary animate-ping" style={{ animationDuration: "3s" }}></div>
      <div className="absolute top-[50%] left-[50%] w-3 h-3 rounded-full bg-brand-accent-purple animate-ping" style={{ animationDuration: "4s", animationDelay: "1s" }}></div>
      <div className="absolute top-[75%] left-[66%] w-3 h-3 rounded-full bg-brand-accent-cyan animate-ping" style={{ animationDuration: "3.5s", animationDelay: "2s" }}></div>
    </div>
  );
};
