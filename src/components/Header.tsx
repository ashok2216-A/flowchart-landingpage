import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to top when blog link is clicked
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3 bg-background/80 backdrop-blur-lg shadow-sm border-b border-border/20" : "py-5 bg-transparent"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-foreground flex items-center gap-2">
            <div className="size-14 rounded-md flex items-center justify-center">
              <img src="/lovable-uploads/ec4acbf6-e578-4249-8837-8cadaf699deb.png" alt="Ask FlowChart Logo" className="size-12 object-cover" />
            </div>
            <span>Ask FlowChart</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <Link to="/blog" className="hover:text-primary transition-colors" onClick={handleScrollToTop}>Blog</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* <ThemeToggle /> */}
          <Link to="/sign-in" className="text-foreground hover:text-brand-blue transition-colors font-medium">Sign In</Link>
          <Link to="/sign-up">
            <Button variant="gradient" className="rounded-full">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          {/* <ThemeToggle /> */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="p-2 text-foreground focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-foreground my-1.5 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden flex flex-col pt-24 px-6 transition-all duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Close button */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-foreground focus:outline-none"
          aria-label="Close mobile menu"
        >
          <X size={24} />
        </button>
        
        <nav className="flex flex-col space-y-6 text-lg">
          <a href="#features" className="hover:text-primary transition-colors border-b border-border pb-2" onClick={() => setIsMobileMenuOpen(false)}>
            Features
          </a>
          <a href="#how-it-works" className="hover:text-primary transition-colors border-b border-border pb-2" onClick={() => setIsMobileMenuOpen(false)}>
            How It Works
          </a>
          <a href="#pricing" className="hover:text-primary transition-colors border-b border-border pb-2" onClick={() => setIsMobileMenuOpen(false)}>
            Pricing
          </a>
          <Link 
            to="/blog" 
            className="hover:text-primary transition-colors border-b border-border pb-2" 
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleScrollToTop();
            }}
          >
            Blog
          </Link>
          <Link to="/about" className="hover:text-primary transition-colors border-b border-border pb-2" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <a href="#faq" className="hover:text-primary transition-colors border-b border-border pb-2" onClick={() => setIsMobileMenuOpen(false)}>
            FAQ
          </a>
          <Link to="/sign-in" className="hover:text-primary transition-colors border-b border-border pb-2" onClick={() => setIsMobileMenuOpen(false)}>
            Sign In
          </Link>
          <Link to="/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="gradient" className="mt-4 rounded-full w-full">
              Sign Up
            </Button>
          </Link>
        </nav>
      </div>
    </header>;
};