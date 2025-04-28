import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

// Get the 3 most recent blog posts
const recentPosts = blogPosts.slice(0, 3);

export const BlogSection = () => {
  // Function to scroll to top when button is clicked
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 md:py-28 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute top-[15%] -right-[30%] w-[40%] h-[40%] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "0.0s" }}></div>
      <div className="absolute bottom-[10%] -left-[20%] w-[30%] h-[30%] bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute bottom-[30%] -left-[20%] w-[30%] h-[30%] bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "0.5s" }}></div>
      </div>

    <div className="container mx-auto px-4">
        <div className="text-center">
        <h2 className="section-title font-display text-3xl md:text-4xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="section-subtitle text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Insights, tips and stories about AI-powered diagramming
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {recentPosts.map((post, index) => (
            <Link to={`/blog/${post.id}`} key={index} className="group relative">
              <div className="bg-background/60 backdrop-blur-md rounded-xl border border-brand-blue/30 hover:border-brand-blue/70 overflow-hidden h-full flex flex-col transition-all duration-300">
                {/* Blue edge glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
                  <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
                  <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
                </div>
                
                <div className="relative h-40 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 z-10"></div>
                  
                  {/* Image with hover effect */}
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x400/slate/white?text=Flow+Chart+Magic";
                    }}
                  />
                  
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-brand-blue/20 text-brand-blue backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors font-display leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 flex-1 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">{post.date}</span>
                    <div className="text-brand-blue hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium">
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-brand-blue border border-brand-blue/30 hover:border-brand-blue hover:bg-background/60 px-6 py-3 rounded-lg transition-all duration-300 font-medium"
            onClick={handleScrollToTop}
          >
            View all articles
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
    </div>
  </section>
);
};
