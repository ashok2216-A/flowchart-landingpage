import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { AnimatedGradient } from "./AnimatedGradients";
import { Link } from "react-router-dom";

export const HowItWorksSection = () => {
  const [showFlowchart, setShowFlowchart] = useState(false);
  const [generatingText, setGeneratingText] = useState("Analyzing request");
  const [typedText, setTypedText] = useState("");
  const [customizeStep, setCustomizeStep] = useState(0);
  const [tooltipStep, setTooltipStep] = useState(0);
  const fullPrompt = "I need a flowchart showing the user signup process with email verification and account creation steps";
  
  // Function to reset and restart the animation cycle
  const resetAndRestartAnimation = () => {
    setShowFlowchart(false);
    
    // Text animation sequence
    const textSequence = [
      { text: "Analyzing request", time: 0 },
      { text: "Processing structure", time: 700 },
      { text: "Building flowchart", time: 1400 },
      { text: "Finalizing design", time: 2100 }
    ];
    
    // Reset the generating text
    setGeneratingText(textSequence[0].text);
    
    // Create timers for each text change
    const textTimers = textSequence.slice(1).map(({ text, time }) => 
      setTimeout(() => {
        setGeneratingText(text);
      }, time)
    );
    
    // Show flowchart after a delay
    const flowchartTimer = setTimeout(() => {
      setShowFlowchart(true);
    }, 2500);
    
    return { textTimers, flowchartTimer };
  };
  
  // Customization animation cycle
  useEffect(() => {
    const cycleCustomization = () => {
      // Cycle through customization steps: 0=initial, 1=styling, 2=moving, 3=adding
      setCustomizeStep(prev => (prev + 1) % 4);
    };
    
    // Initial delay then start the cycle
    const initialDelay = setTimeout(() => {
      cycleCustomization();
      
      // Set up the recurring cycle
      const intervalId = setInterval(cycleCustomization, 2000);
      
      return () => clearInterval(intervalId);
    }, 1000);
    
    return () => clearTimeout(initialDelay);
  }, []);
  
  // Typing animation for the prompt
  useEffect(() => {
    // Reset typing animation
    setTypedText("");
    let currentIndex = 0;

    // Function to add next character
    const typeNextCharacter = () => {
      if (currentIndex < fullPrompt.length) {
        setTypedText(fullPrompt.substring(0, currentIndex + 1));
        currentIndex++;
        // Random typing speed between 50ms and 100ms for realistic effect
        const randomDelay = Math.floor(Math.random() * 50) + 50;
        setTimeout(typeNextCharacter, randomDelay);
      } else {
        // After finishing typing, wait 1s and restart
        setTimeout(() => {
          setTypedText("");
          currentIndex = 0;
          setTimeout(typeNextCharacter, 500); // Small pause before restarting
        }, 3000);
      }
    };

    // Start typing
    const startTypingTimer = setTimeout(typeNextCharacter, 500);

    return () => {
      clearTimeout(startTypingTimer);
    };
  }, []);
  
  // Set up the animation cycle to run every 5 seconds
  useEffect(() => {
    // Initial animation
    const { textTimers, flowchartTimer } = resetAndRestartAnimation();
    
    // Set up recurring animation every 5 seconds
    const animationCycleTimer = setInterval(() => {
      resetAndRestartAnimation();
    }, 5000);
    
    return () => {
      clearTimeout(flowchartTimer);
      textTimers.forEach(timer => clearTimeout(timer));
      clearInterval(animationCycleTimer);
    };
  }, []);
  
  // Tooltip animation cycle
  useEffect(() => {
    const cycleTooltip = () => {
      // Cycle through tooltip animation steps: 0=hidden, 1=showing, 2=highlighting
      setTooltipStep(prev => (prev + 1) % 3);
    };
    
    // Initial delay then start the cycle
    const initialDelay = setTimeout(() => {
      cycleTooltip();
      
      // Set up the recurring cycle
      const intervalId = setInterval(cycleTooltip, 3000);
      
      return () => clearInterval(intervalId);
    }, 1500);
    
    return () => clearTimeout(initialDelay);
  }, []);
  
  // Handle scroll to top when clicking the button
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatedGradient variant="blue" position="top-right" size="lg" className="opacity-10" />
        <AnimatedGradient variant="blue" position="bottom-left" size="lg" delay={1} className="opacity-10" />
        <AnimatedGradient variant="blue" position="center" size="md" delay={2} className="opacity-5" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Create professional flowcharts in just four simple steps
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Glowing connector lines (visible only on md screens and up) */}
          <div className="absolute top-[150px] left-[calc(23.33%-30px)] w-[calc(23.33%+60px)] h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-0 md:opacity-100 glow-pulse hidden md:block"></div>
          <div className="absolute top-[150px] left-[calc(48.33%-30px)] w-[calc(23.33%+60px)] h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-0 md:opacity-100 glow-pulse hidden md:block"></div>
          <div className="absolute top-[150px] left-[calc(73.33%-30px)] w-[calc(23.33%+60px)] h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-0 md:opacity-100 glow-pulse hidden md:block"></div>
          
          <div className="step-card animate-slide-in-bottom group border-1.5 border-brand-blue/30 hover:border-brand-blue relative transition-all duration-300" style={{ animationDelay: "0.1s" }}>
            {/* Blue edge glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
            </div>
            
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl font-bold absolute -top-8 left-1/2 transform -translate-x-1/2 border-4 border-background shadow-lg">
              1
            </div>
            <div className="pt-10 text-center">
              <h3 className="text-2xl font-bold mb-4">Describe</h3>
              <div className="relative h-40 mb-4 bg-background/50 rounded-lg p-4 border border-border overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1500" style={{ transitionDelay: "200ms" }}></div>
                <div className="text-muted-foreground italic text-sm text-center h-full flex flex-col items-center justify-center">
                  <div className="typing-container">
                    <span className="typing-text">{typedText}</span>
                    <span className={`typing-cursor ${typedText.length === fullPrompt.length ? 'opacity-0' : 'opacity-100'}`}>|</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Simply describe what you need in plain language, just like you would to a colleague
              </p>
            </div>
          </div>
          
          <div className="step-card animate-slide-in-bottom group border-1.5 border-brand-blue/30 hover:border-brand-blue relative transition-all duration-300" style={{ animationDelay: "0.2s" }}>
            {/* Blue edge glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
            </div>
            
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-light flex items-center justify-center text-white text-xl font-bold absolute -top-8 left-1/2 transform -translate-x-1/2 border-4 border-background shadow-lg">
              2
            </div>
            <div className="pt-10 text-center">
              <h3 className="text-2xl font-bold mb-4">Generate</h3>
              <div className="relative h-40 mb-4 bg-background/50 rounded-lg p-4 border border-border overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1500" style={{ transitionDelay: "200ms" }}></div>
                
                {/* Animation container */}
                <div className="w-full h-full relative">
                  {/* Enhanced Loading spinner that shows first */}
                  <div className={`w-full h-full flex flex-col justify-center items-center transition-opacity duration-500 ${showFlowchart ? 'opacity-0 absolute inset-0' : 'opacity-100'}`}>
                    <div className="relative w-14 h-14">
                      <div className="w-14 h-14 border-4 border-brand-blue/30 border-t-brand-blue rounded-full animate-spin"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <text> AI </text>
                      </div>
                    </div>
                    <div className="mt-3 text-brand-blue font-medium">{generatingText}</div>
                    <div className="mt-1 flex space-x-1">
                      <span className="w-1 h-1 bg-brand-blue/70 rounded-full animate-pulse" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-1 h-1 bg-brand-blue/70 rounded-full animate-pulse" style={{ animationDelay: "300ms" }}></span>
                      <span className="w-1 h-1 bg-brand-blue/70 rounded-full animate-pulse" style={{ animationDelay: "600ms" }}></span>
                    </div>
                  </div>
                  
                  {/* Simplified flowchart with basic elements */}
                  <div className={`w-full h-full flex justify-center items-center transition-all duration-500 ${showFlowchart ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4'}`}>
                    <div className="w-full flex flex-col items-center justify-center">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="w-full max-w-[240px] h-[80px] relative">
                          {/* Simple straight line connecting all elements */}
                          <div className="absolute top-[40px] left-[40px] w-[160px] h-[2px] bg-brand-blue/60 animate-grow-right" style={{ animationDelay: "300ms", transformOrigin: "left" }}></div>
                          
                          {/* Start node */}
                          <div className="absolute left-0 top-[25px] w-[40px] h-[30px] bg-gradient-to-r from-brand-blue/30 to-brand-blue/10 border border-brand-blue/50 rounded-md flex items-center justify-center text-xs animate-fade-in shadow-sm" style={{ animationDelay: "200ms" }}>
                            Start
                          </div>
                          
                          {/* Process node */}
                          <div className="absolute left-[80px] top-[25px] w-[80px] h-[30px] bg-gradient-to-r from-brand-blue/30 to-brand-blue/10 border border-brand-blue/50 rounded-md flex items-center justify-center text-xs animate-fade-in shadow-sm" style={{ animationDelay: "500ms" }}>
                            Process
                          </div>
                          
                          {/* End node */}
                          <div className="absolute right-0 top-[25px] w-[40px] h-[30px] bg-gradient-to-r from-brand-blue/30 to-brand-blue/10 border border-brand-blue/50 rounded-md flex items-center justify-center text-xs animate-fade-in shadow-sm" style={{ animationDelay: "800ms" }}>
                            End
                          </div>
                          
                          {/* Arrow markers */}
                          <div className="absolute left-[70px] top-[40px] transform -translate-y-1/2 border-t-[5px] border-r-[5px] border-t-transparent border-r-transparent border-b-[5px] border-l-[5px] border-b-transparent border-l-brand-blue/60 animate-fade-in" style={{ animationDelay: "400ms" }}></div>
                          <div className="absolute left-[170px] top-[40px] transform -translate-y-1/2 border-t-[5px] border-r-[5px] border-t-transparent border-r-transparent border-b-[5px] border-l-[5px] border-b-transparent border-l-brand-blue/60 animate-fade-in" style={{ animationDelay: "700ms" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Our AI generates a professional flowchart based on your description in seconds
              </p>
            </div>
          </div>
          
          <div className="step-card animate-slide-in-bottom group border-1.5 border-brand-blue/30 hover:border-brand-blue relative transition-all duration-300" style={{ animationDelay: "0.3s" }}>
            {/* Blue edge glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
            </div>
            
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-light flex items-center justify-center text-white text-xl font-bold absolute -top-8 left-1/2 transform -translate-x-1/2 border-4 border-background shadow-lg">
              3
            </div>
            <div className="pt-10 text-center">
              <h3 className="text-2xl font-bold mb-4">Customize</h3>
              <div className="relative h-40 mb-4 bg-background/50 rounded-lg p-4 border border-border overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1500" style={{ transitionDelay: "200ms" }}></div>
                
                {/* Interactive flowchart customization */}
                <div className="w-full max-w-[200px] mx-auto relative h-full">
                  {/* Start node */}
                  <div className={`w-24 h-10 mx-auto ${
                    customizeStep === 1 ? 'bg-brand-accent-cyan/30 border-brand-accent-cyan/60 scale-110' : 'bg-brand-blue/20 border-brand-blue/30'
                  } border rounded-md flex items-center justify-center text-xs mb-2 transition-all duration-300`}>
                    {customizeStep === 1 && (
                      <div className="absolute -bottom-5 -right-5 text-[10px] text-brand-accent-cyan font-medium animate-bounce">
                        Styling...
                      </div>
                    )}
                    Start
                  </div>
                  
                  {/* Connector */}
                  <div className="w-[2px] h-3 bg-brand-blue/50 mx-auto mb-2"></div>
                  
                  {/* Email verification node - will move */}
                  <div 
                    className={`w-32 h-12 mx-auto bg-brand-blue/20 border border-brand-blue/30 rounded-md flex items-center justify-center text-xs p-1 mb-2 transition-all duration-300 ${
                      customizeStep === 2 ? 'transform translate-x-4' : ''
                    }`}
                    style={{ 
                      boxShadow: customizeStep === 2 ? '0 0 0 2px rgba(99, 102, 241, 0.3)' : 'none',
                      position: 'relative'
                    }}
                  >
                    {customizeStep === 2 && (
                      <div className="absolute -top-5 -right-7 text-[10px] text-primary font-medium animate-bounce">
                        Moving...
                      </div>
                    )}
                    User Enters Email
                  </div>
                  
                  {/* Connector */}
                  <div className={`w-[2px] h-3 bg-brand-blue/50 mx-auto mb-2 ${
                    customizeStep === 2 ? 'transform translate-x-4' : ''
                  } transition-all duration-300`}></div>
                  
                  {/* Final node */}
                  <div className={`mx-auto bg-brand-blue/20 border border-brand-blue/30 rounded-md flex items-center justify-center text-xs p-1 transition-all duration-300 ${
                    customizeStep === 3 ? 'animate-pulse font-medium' : ''
                  }`}
                    style={{
                      width: customizeStep === 3 ? '42px' : '36px',
                      height: customizeStep === 3 ? '36px' : '32px',
                      position: 'relative',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  >
                    {customizeStep === 3 && (
                      <div className="absolute -top-5 -right-10 text-[10px] text-purple-500 font-medium animate-bounce">
                        Modifying...
                      </div>
                    )}
                    {customizeStep === 3 ? 'Done!' : 'Done'}
                  </div>
                  
                  {/* Toolbar that appears in step 3 */}
                  {customizeStep === 3 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-background/90 border border-brand-blue/30 rounded-md py-1 px-2 flex items-center space-x-2 animate-fade-in">
                      <div className="w-3 h-3 rounded-full bg-brand-accent-yellow"></div>
                      <div className="w-3 h-3 rounded-full bg-brand-accent-cyan"></div>
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground">
                Fine-tune your flowchart with our intuitive editor - no design skills required
              </p>
            </div>
          </div>
          
          {/* New container for Tooltip features */}
          <div className="step-card animate-slide-in-bottom group border-1.5 border-brand-blue/30 hover:border-brand-blue relative transition-all duration-300" style={{ animationDelay: "0.4s" }}>
            {/* Blue edge glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
            </div>
            
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-accent-cyan flex items-center justify-center text-white text-xl font-bold absolute -top-8 left-1/2 transform -translate-x-1/2 border-4 border-background shadow-lg">
              4
            </div>
            <div className="pt-10 text-center">
              <h3 className="text-2xl font-bold mb-4">Tooltips by AI</h3>
              <div className="relative h-40 mb-4 bg-background/50 rounded-lg p-4 border border-border overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1500" style={{ transitionDelay: "200ms" }}></div>
                
                {/* Tooltip Demo */}
                <div className="w-full max-w-[200px] mx-auto flex flex-col items-center justify-center h-full">
                  {/* Flowchart node with tooltip */}
                  <div 
                    className={`w-[110px] h-[38px] ${
                      tooltipStep === 2 ? 'bg-brand-accent-purple/20 border-brand-accent-purple/50' : 'bg-brand-blue/20 border-brand-blue/30'
                    } border rounded-md flex items-center justify-center text-xs p-1 relative transition-all duration-500 ${
                      tooltipStep === 2 ? 'scale-105' : ''
                    }`}
                  >
                    Process Data
                    {/* Tooltip */}
                    <div className={`
                      absolute -top-24 left-1/2 transform -translate-x-1/2 
                      bg-brand-accent-purple/90 text-white text-[10px] p-2 rounded-md w-[150px] shadow-lg
                      transition-all duration-500
                      ${tooltipStep === 0 ? 'opacity-0 scale-95 -translate-y-4' : 'opacity-100 scale-100 -translate-y-0'}
                    `}>
                      <div className="font-medium mb-1">Process User Data</div>
                      <div className="text-[9px] text-white/80">Validates and processes the user submitted information</div>
                      {/* Tooltip arrow */}
                      <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-brand-accent-purple/90 rotate-45"></div>
                      
                      {/* Cursor effect */}
                      {tooltipStep === 1 && <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full animate-ping"></div>}
                    </div>
                  </div>
                  
                  {/* Documentation annotation */}
                  <div className={`
                    flex items-start space-x-2 bg-background/80 border border-brand-blue/20 rounded-md p-2 max-w-[180px] mt-6
                    transition-all duration-500
                    ${tooltipStep === 0 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                    ${tooltipStep === 2 ? 'border-brand-accent-yellow/50 bg-brand-accent-yellow/5 shadow-md' : ''}
                  `}>
                    <div className={`${tooltipStep === 2 ? 'text-brand-accent-yellow animate-pulse' : 'text-brand-accent-yellow/70'} mt-0.5`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </div>
                    <div className="text-[10px] text-left">
                      <span className="font-medium">Add documentation directly in your flowchart</span>
                    </div>
                  </div>
                  
                  {/* Cursor animation */}
                  <div 
                    className={`absolute h-6 w-6 pointer-events-none transition-all duration-300 ${tooltipStep === 0 ? 'opacity-100' : 'opacity-0'}`}
                    style={{ 
                      top: tooltipStep === 0 ? '35%' : '70%', 
                      left: tooltipStep === 0 ? '55%' : '70%',
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1">
                      <path d="M7 1.5C7 0.671573 7.67157 0 8.5 0C9.32843 0 10 0.671573 10 1.5V10.5C10 10.7761 10.2239 11 10.5 11C10.7761 11 11 10.7761 11 10.5V5.5C11 4.67157 11.6716 4 12.5 4C13.3284 4 14 4.67157 14 5.5V10.5C14 10.7761 14.2239 11 14.5 11C14.7761 11 15 10.7761 15 10.5V7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5V10.5C18 10.7761 18.2239 11 18.5 11C18.7761 11 19 10.7761 19 10.5V9.5C19 8.67157 19.6716 8 20.5 8C21.3284 8 22 8.67157 22 9.5V16C22 19.866 18.866 23 15 23H10C6.13401 23 3 19.866 3 16V7.5C3 6.67157 3.67157 6 4.5 6C5.32843 6 6 6.67157 6 7.5V10.5C6 10.7761 6.22386 11 6.5 11C6.77614 11 7 10.7761 7 10.5V1.5Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Enhance understanding with interactive tooltips and documentation
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Link to="/flowchart-generator" onClick={handleScrollToTop}>
            <Button size="lg" variant="gradient">Try It Free</Button>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">No credit card required</p>
        </div>
      </div>
    </section>
  );
};

// Need to add these animations to your global CSS
// @keyframes grow-down {
//   from { transform: scaleY(0); }
//   to { transform: scaleY(1); }
// }
// 
// @keyframes fade-in {
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// 
// .animate-grow-down {
//   animation: grow-down 0.5s ease forwards;
// }
// 
// .animate-fade-in {
//   animation: fade-in 0.5s ease forwards;
// }
