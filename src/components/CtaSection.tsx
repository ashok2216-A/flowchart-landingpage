
import React, { useState } from "react";
import { Button } from "./ui/button";

export const CtaSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-accent-cyan/10 dark:from-brand-blue/20 dark:to-brand-accent-cyan/20"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] bg-brand-accent-cyan/5 dark:bg-brand-accent-cyan/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Workflow?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who are already saving time and creating beautiful flowcharts with AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="gradient" size="lg" className="rounded-full text-base">
              Start Creating Flowcharts
            </Button>
            {/* <Button variant="outline" size="lg" className="rounded-full text-base">
              Schedule a Demo
            </Button> */}
          </div>

          {/* <div className="mt-16 max-w-md mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <h3 className="text-xl font-bold mb-4">Get Feature Updates</h3>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button variant="gradient" type="submit">Subscribe</Button>
                </form>
              ) : (
                <div className="py-2 px-4 bg-brand-blue/10 text-brand-blue rounded-md animate-fade-in">
                  Thanks for subscribing! We'll keep you updated.
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
