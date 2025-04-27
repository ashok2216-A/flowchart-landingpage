import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

// Extract unique categories for filtering
const allCategories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="py-8 md:py-12 overflow-hidden relative">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[10%] right-[5%] w-[40%] h-[40%] bg-brand-blue/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
          </div>

          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Flow Chart Magic Blog</h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-700 dark:text-slate-200 leading-relaxed">
                Insights, tips, and stories about AI-powered diagramming and visualization
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="relative w-full md:w-1/3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 w-full border rounded-lg bg-background border-brand-blue/20 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
                {allCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`rounded-full text-sm px-4 py-1 h-auto ${
                      selectedCategory === category 
                        ? "bg-brand-blue text-white hover:bg-brand-blue/90" 
                        : "border-brand-blue/30 text-muted-foreground hover:border-brand-blue hover:text-brand-blue"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Featured Post (first post) */}
            {filteredPosts.length > 0 && (
              <div className="mb-16">
                <Link to={`/blog/${filteredPosts[0].id}`} className="group block">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-background/60 backdrop-blur-md rounded-xl border border-brand-blue/30 hover:border-brand-blue/70 overflow-hidden transition-all duration-300 p-1">
                    {/* Blue edge glow effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
                      <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
                      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
                      <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
                    </div>
                    
                    <div className="md:col-span-3 relative h-52 md:h-64 rounded-lg overflow-hidden">
                      <img 
                        src={filteredPosts[0].image} 
                        alt={filteredPosts[0].title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-brand-blue/20 text-brand-blue backdrop-blur-sm">
                          {filteredPosts[0].category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <img 
                          src={filteredPosts[0].author.avatar} 
                          alt={filteredPosts[0].author.name}
                          className="w-8 h-8 rounded-full object-cover" 
                        />
                        <div>
                          <p className="text-sm font-medium">{filteredPosts[0].author.name}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{filteredPosts[0].date}</span>
                            <span>•</span>
                            <span>{filteredPosts[0].readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-brand-blue transition-colors font-display leading-tight">
                        {filteredPosts[0].title}
                      </h2>
                      <p className="text-slate-600 dark:text-slate-300 mb-6 text-base leading-relaxed">
                        {filteredPosts[0].excerpt}
                      </p>
                      <div className="text-brand-blue flex items-center gap-1 font-medium">
                        Read article
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Rest of the posts grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="group relative">
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
                      
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-brand-blue/20 text-brand-blue backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full object-cover" 
                        />
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors font-display leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 flex-1 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto text-brand-blue flex items-center gap-1 text-sm font-medium">
                        Read article
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="mb-6 text-brand-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 font-display">No articles found</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button 
                  className="mt-6" 
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog; 