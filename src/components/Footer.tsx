import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { AnimatedGradient } from "./AnimatedGradients";
import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatedGradient variant="blue" position="top-right" size="md" className="opacity-10" />
        <AnimatedGradient variant="blue" position="bottom-left" size="md" delay={1} className="opacity-10" />
        {/* Animated footer line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Top Section with Logo and Newsletter */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 pb-16 border-b border-slate-800">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              <div className="size-12 rounded-md flex items-center justify-center">
                <img src="/lovable-uploads/ec4acbf6-e578-4249-8837-8cadaf699deb.png" alt="Ask FlowChart Logo" className="size-10 object-cover" />
              </div>
              <span>Ask FlowChart</span>
            </Link>
            <p className="text-slate-300 max-w-md">
              Transform your ideas into visual flowcharts with AI-powered technology.
            </p>
          </div>
          
          {/* Newsletter Signup with Animated Border */}
          {/* <div className="w-full md:w-auto">
            <div className="relative group"> */}
              {/* Animated borders */}
              {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue/30 to-brand-purple/30 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative flex items-center bg-slate-800/80 backdrop-blur-sm rounded-md p-1 border border-slate-700/50">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent border-none text-white px-4 py-2 flex-1 focus:outline-none rounded-l-md"
                />
                <button className="bg-brand-blue hover:bg-brand-blue/80 text-white px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-2">Stay updated with our latest features and releases</p>
          </div>*/}
        </div> 
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-white">About Us</h4>
            <p className="text-slate-300 mb-6">
              Create professional diagrams in seconds with intuitive tools. Our AI-powered platform makes visualization simple.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors group relative">
                <div className="absolute -inset-1.5 bg-brand-blue/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </div>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors group relative">
                <div className="absolute -inset-1.5 bg-brand-blue/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </div>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors group relative">
                <div className="absolute -inset-1.5 bg-brand-blue/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors group relative">
                <div className="absolute -inset-1.5 bg-brand-blue/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-slate-300 hover:text-white transition-colors inline-block">Features</a></li>
              <li><a href="#pricing" className="text-slate-300 hover:text-white transition-colors inline-block">Pricing</a></li>
              {/* <li><a href="#" className="text-slate-300 hover:text-white transition-colors inline-block">Integrations</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors inline-block">API</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors inline-block">What's New</a></li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              {/* <li><a href="#" className="text-slate-300 hover:text-white transition-colors inline-block">Documentation</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors inline-block">Tutorials</a></li> */}
              <li><Link to="/blog" className="text-slate-300 hover:text-white transition-colors inline-block">Blog</Link></li>
              <li><a href="#faq" className="text-slate-300 hover:text-white transition-colors inline-block">FAQ</a></li>
              {/* <li><a href="#" className="text-slate-300 hover:text-white transition-colors inline-block">Support</a></li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors inline-block">About Us</Link></li>
              {/* <li><a href="#" className="text-slate-300 hover:text-white transition-colors inline-block">Careers</a></li> */}
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors inline-block">Contact</a></li>
              {/* <li><a href="#" className="text-slate-300 hover:text-white transition-colors inline-block">Partners</a></li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Footer with Copyright and Links */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0 order-2 md:order-1">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
              <span>&copy; {year} Ask FlowChart. All rights reserved.</span>
              <span className="md:ml-2 flex items-center">
                <span className="hidden md:inline-block mx-2">|</span>
                <span className="flex items-center">
                  A product of 
                  <a href="https://helix.ai" className="text-brand-blue hover:text-brand-blue/80 transition-colors ml-1 font-semibold flex items-center">
                    Helix.ai
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block ml-1 size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </span>
              </span>
            </div>
          </div>
          <div className="flex gap-6 text-sm order-1 md:order-2 mb-4 md:mb-0">
            <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
            {/* <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a> */}
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};