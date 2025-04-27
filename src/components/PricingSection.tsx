import React, { useState } from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { AnimatedGradient } from "./AnimatedGradients";

type PlanFeature = {
  title: string;
  free: boolean;
  pro: boolean;
  enterprise: boolean;
};

const features: PlanFeature[] = [
  { title: "Basic Flowcharts", free: true, pro: true, enterprise: true },
  { title: "AI Text-to-Flowchart", free: true, pro: true, enterprise: true },
  { title: "Export as PNG", free: true, pro: true, enterprise: true },
  { title: "Up to 5 flowcharts", free: true, pro: true, enterprise: true },
  { title: "Custom Themes", free: false, pro: true, enterprise: true },
  { title: "Export SVG/PDF", free: false, pro: true, enterprise: true },
  { title: "Unlimited Flowcharts", free: false, pro: true, enterprise: true },
  { title: "Team Collaboration", free: false, pro: false, enterprise: true },
  { title: "Private Storage", free: false, pro: false, enterprise: true },
  { title: "API Access", free: false, pro: false, enterprise: true },
  { title: "Priority Support", free: false, pro: false, enterprise: true },
];

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <AnimatedGradient variant="yellow" position="top-left" size="lg" />
        <AnimatedGradient variant="blue" position="bottom-right" size="lg" delay={1} />
        <AnimatedGradient variant="mixed" position="center" size="sm" delay={2} className="opacity-10" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-title">Pricing Plans</h2>
          <p className="section-subtitle">
            Choose the perfect plan for your needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-sm ${!isAnnual ? "text-foreground font-bold" : "text-muted-foreground"}`}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 bg-primary/20 rounded-full relative transition-colors duration-200 p-1 flex items-center"
            aria-label={`Switch to ${isAnnual ? 'monthly' : 'annual'} billing`}
          >
            <div 
              className={`w-4 h-4 rounded-full bg-primary absolute left-1 transition-all duration-300 ${
                isAnnual ? "translate-x-6" : "translate-x-0"
              }`} 
            />
          </button>
          <span className={`text-sm ${isAnnual ? "text-foreground font-bold" : "text-muted-foreground"}`}>
            Yearly <span className="text-xs text-brand-accent-red font-bold">Save 20%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="price-card group animate-slide-in-bottom hover:translate-y-[-5px] transition-all duration-300 border-1.5 border-brand-blue/30 hover:border-brand-blue" style={{ animationDelay: "0.1s" }}>
            {/* Animated Edge Glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent animate-pulse-slow"></div>
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-blue/30 to-transparent animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-brand-blue/30 to-transparent animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
            
            <div className="mb-8 text-center relative z-10">
              <h3 className="text-xl font-bold">Free</h3>
              <div className="text-4xl font-bold mt-4 mb-2">$0</div>
              <p className="text-muted-foreground text-sm">Forever free</p>
            </div>
            
            <Button variant="outline" className="w-full mb-8 relative z-10">Get Started</Button>
            
            
            <div className="space-y-4 text-sm mb-8 flex-grow relative z-10">
              {features.map((feature, index) => (
                <div key={index} className={`flex items-center gap-2 ${feature.free ? "" : "text-muted-foreground"}`}>
                  {feature.free ? (
                    <Check className="h-4 w-4 text-brand-blue" />
                  ) : (
                    <span className="h-4 w-4 flex items-center justify-center">-</span>
                  )}
                  <span>{feature.title}</span>
                </div>
              ))}
              
            </div>
            
          </div>

          {/* Pro Plan */}
          <div className="price-card price-card-highlight relative group animate-slide-in-bottom hover:translate-y-[-5px] transition-all duration-300 border-1.5 border-brand-blue" style={{ animationDelay: "0.2s" }}>
            {/* Animated Edge Glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent animate-pulse-slow"></div>
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-blue/50 to-transparent animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-brand-blue/50 to-transparent animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
            
            <div className="absolute top-0 right-0 bg-gradient-primary text-white text-xs font-bold py-1 px-3 rounded-bl-lg rounded-tr-lg z-20">
              POPULAR
            </div>
            <div className="mb-8 text-center relative z-10">
              <h3 className="text-xl font-bold">Pro</h3>
              <div className="text-4xl font-bold mt-4 mb-2">
                ${isAnnual ? "2" : "2"}
                <span className="text-base font-normal text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground text-sm">
                {isAnnual ? "Billed annually ($20/year)" : "Billed monthly"}
              </p>
            </div>
            
            
            <Button variant="gradient" className="w-full mb-8 relative z-10 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">Upgrade to Pro</Button>
            
            <div className="space-y-4 text-sm mb-8 flex-grow relative z-10">
              {features.map((feature, index) => (
                <div key={index} className={`flex items-center gap-2 ${feature.pro ? "" : "text-muted-foreground"}`}>
                  {feature.pro ? (
                    <Check className="h-4 w-4 text-brand-blue" />
                  ) : (
                    <span className="h-4 w-4 flex items-center justify-center">-</span>
                  )}
                  <span>{feature.title}</span>
                </div>
              ))}
              
            </div>
            {/* Coming Soon Badge */}
            <div className="absolute bottom-3 right-3">
              <span className="bg-brand-blue text-xs font-semibold text-white px-2 py-1 rounded-full animate-pulse">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="price-card group animate-slide-in-bottom hover:translate-y-[-5px] transition-all duration-300 border-1.5 border-brand-blue/30 hover:border-brand-blue" style={{ animationDelay: "0.3s" }}>
            {/* Animated Edge Glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent animate-pulse-slow"></div>
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-blue/30 to-transparent animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-brand-blue/30 to-transparent animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
            
            <div className="mb-8 text-center relative z-10">
              <h3 className="text-xl font-bold">Enterprise</h3>
              <div className="text-4xl font-bold mt-4 mb-2">
                ${isAnnual ? "10" : "10"}
                <span className="text-base font-normal text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground text-sm">
                {isAnnual ? "Billed annually ($100/year)" : "Billed monthly"}
              </p>
            </div>
            
            <Button variant="outline" className="w-full mb-8 relative z-10">Contact Sales</Button>
            
            <div className="space-y-4 text-sm mb-8 flex-grow relative z-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-blue" />
                  <span>{feature.title}</span>
                </div>
              ))}
              
            </div>
            {/* Coming Soon Badge */}
            <div className="absolute bottom-3 right-3">
              <span className="bg-brand-blue text-xs font-semibold text-white px-2 py-1 rounded-full animate-pulse">
                Coming Soon
              </span>
            </div>
          </div>
        </div>

        {/* Special Offer Banner */}
        <div className="mt-16 relative overflow-hidden rounded-2xl bg-card border-1.5 border-brand-blue group">
          {/* Animated Edge Glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent animate-pulse-slow"></div>
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-blue/50 to-transparent animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-brand-blue/50 to-transparent animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
          
          <div className="relative p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-brand-blue">Special Launch Offer</h3>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              Get 3 months free when you sign up for an annual Pro plan. Limited time offer!
            </p>
            <Button className="bg-brand-blue text-white hover:bg-brand-blue/90 font-medium rounded-full px-8 py-2 group-hover:shadow-lg group-hover:shadow-brand-blue/20 transition-all duration-300">
              Claim Offer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
