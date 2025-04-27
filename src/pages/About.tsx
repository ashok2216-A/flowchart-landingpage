import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[10%] right-[5%] w-[40%] h-[40%] bg-brand-blue/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] bg-brand-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
          </div>

          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">About Ask Flow Chart</h1>
              <p className="text-lg max-w-3xl mx-auto">
                We're on a mission to simplify diagram creation with AI, making complex visualization accessible to everyone.
              </p>
            </div>

            {/* Our Story Section */}
            <div className="mb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="mb-4">
                    Ask Flow Chart was born from a simple observation: creating diagrams and flowcharts was taking too much time and effort for teams across industries. 
                  </p>
                  <p className="mb-4">
                    Founded in 2023 by a team of AI enthusiasts and visualization experts, we set out to build a tool that would make diagram creation as simple as describing what you want.
                  </p>
                  <p>
                    Today, thousands of professionals use our platform to streamline their workflow, communicate ideas effectively, and save countless hours on documentation.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Team collaboration" 
                    className="rounded-xl shadow-lg"
                  />
                  <div className="absolute -bottom-23 -right-6 bg-brand-blue/10 backdrop-blur-md border border-brand-blue/30 rounded-lg p-4 shadow-lg">
                    <p className="font-medium text-sm">
                      "Our goal is to make flowchart creation so intuitive that anyone can do it."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Mission Section */}
            <div className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg max-w-3xl mx-auto">
                  To democratize visual communication by making professional-quality diagram creation accessible to everyone, regardless of design experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-background/60 backdrop-blur-sm border border-brand-blue/30 rounded-xl p-6 hover:border-brand-blue/70 transition-all duration-300">
                  <div className="size-14 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 rounded-lg flex items-center justify-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Simplicity</h3>
                  <p className="text-muted-foreground">
                    Creating complex visualizations should be simple. Our AI understands natural language so you can describe what you need.
                  </p>
                </div>

                <div className="bg-background/60 backdrop-blur-sm border border-brand-blue/30 rounded-xl p-6 hover:border-brand-blue/70 transition-all duration-300">
                  <div className="size-14 bg-gradient-to-br from-brand-purple/20 to-brand-purple/10 rounded-lg flex items-center justify-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Accessibility</h3>
                  <p className="text-muted-foreground">
                    Everyone should be able to communicate visually. Our platform requires no design skills or technical knowledge.
                  </p>
                </div>

                <div className="bg-background/60 backdrop-blur-sm border border-brand-blue/30 rounded-xl p-6 hover:border-brand-blue/70 transition-all duration-300">
                  <div className="size-14 bg-gradient-to-br from-brand-accent-purple/20 to-brand-accent-purple/10 rounded-lg flex items-center justify-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-brand-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We're constantly pushing the boundaries of what's possible with AI-generated visualizations and collaborative tools.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About; 