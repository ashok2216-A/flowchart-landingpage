import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  
  useEffect(() => {
    // Find the current post
    const currentPost = blogPosts.find(post => post.id === postId);
    setPost(currentPost);
    
    // Find related posts from the same category or by the same author
    if (currentPost) {
      const related = blogPosts
        .filter(p => p.id !== postId && (p.category === currentPost.category || p.author.name === currentPost.author.name))
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-32 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Post not found</h1>
            <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <article className="relative pb-20">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-brand-blue/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-[30%] left-[5%] w-[25%] h-[25%] bg-brand-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
          </div>

          {/* Hero section */}
          <div className="w-full bg-gradient-to-b from-black/5 to-transparent">
            <div className="container mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-sm rounded-full bg-brand-blue/20 text-brand-blue">
                    {post.category}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex items-start gap-4 mb-8">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div>
                    <p className="font-medium">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">{post.author.role}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="w-full h-[30vh] md:h-[40vh] relative mb-12">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Article content */}
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-base prose-p:leading-relaxed prose-p:font-normal prose-li:text-base prose-li:leading-relaxed">
                <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-slate-700 dark:text-slate-200">
                  {post.excerpt}
                </p>
                
                <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Introduction to {post.category} Flowcharts</h2>
                <p className="mb-6">
                  In today's fast-paced digital environment, effective visualization of processes and ideas has become more crucial than ever. Whether you're managing a software development team, outlining business workflows, or planning educational content, flowcharts serve as an indispensable tool for clear communication and understanding.
                </p>
                
                <p className="mb-6">
                  AI-powered flowchart tools like Ask Flow Chart are revolutionizing how we approach diagramming. By leveraging natural language processing and machine learning, these innovative tools allow users to create complex visualizations simply by describing what they need in plain language. This approach eliminates the traditional learning curve associated with diagram software and democratizes visual communication across all skill levels.
                </p>
                
                <figure className="my-10">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                    alt="Team collaboration on flowchart"
                    className="w-full rounded-lg object-cover object-center h-64"
                  />
                  <figcaption className="text-center text-muted-foreground text-sm mt-3">
                    Teams can collaborate more effectively with shared visual diagrams
                  </figcaption>
                </figure>
                
                <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Key Benefits of AI-Powered Flowcharts</h2>
                <p className="mb-6">
                  The advantages of using AI to generate and maintain flowcharts extend far beyond mere convenience. Here are some key benefits:
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li><strong className="font-semibold">Time Efficiency:</strong> What used to take hours can now be accomplished in minutes, freeing up valuable time for other critical tasks.</li>
                  <li><strong className="font-semibold">Accessibility:</strong> Team members without design skills can create professional diagrams, enabling broader participation in documentation and planning.</li>
                  <li><strong className="font-semibold">Consistency:</strong> AI ensures diagrams follow consistent styling and formatting, creating a unified visual language across your organization.</li>
                  <li><strong className="font-semibold">Easy Updates:</strong> As processes evolve, diagrams can be quickly updated through simple text commands rather than manual rebuilding.</li>
                  <li><strong className="font-semibold">Integration:</strong> Modern AI flowchart tools integrate with existing systems, allowing for seamless incorporation into your workflow.</li>
                </ul>
                
                <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Real-World Applications</h2>
                <p className="mb-6">
                  Across industries, professionals are finding innovative ways to leverage AI-powered flowcharts. Software developers use them to map user journeys and system architectures. Project managers visualize complex workflows and dependencies. Teachers create engaging learning materials that illustrate concepts step by step.
                </p>
                
                <blockquote className="pl-6 border-l-4 border-brand-blue/50 italic my-8 text-lg text-slate-600 dark:text-slate-300">
                  "The ability to quickly generate and modify flowcharts has transformed how our team plans and communicates. What used to be a bottleneck in our process is now a collaborative strength."
                  <cite className="block mt-3 font-semibold not-italic text-base">— Sarah Chen, CTO</cite>
                </blockquote>
                
                <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Getting Started with AI Flowcharting</h2>
                <p className="mb-6">
                  If you're new to AI-powered diagramming, here's a simple process to begin:
                </p>
                
                <ol className="space-y-3 mb-8 list-decimal list-inside">
                  <li className="pl-2">Start with a clear description of what you want to visualize</li>
                  <li className="pl-2">Use natural language to describe the flow and relationships</li>
                  <li className="pl-2">Review the AI-generated diagram and make adjustments as needed</li>
                  <li className="pl-2">Customize colors, shapes, and styles to match your preferences</li>
                  <li className="pl-2">Share with your team for collaborative editing and feedback</li>
                </ol>
                
                <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Looking Forward</h2>
                <p className="mb-6">
                  As AI technology continues to advance, we can expect even more sophisticated capabilities in flowchart generation. From voice-activated diagram creation to predictive suggestions based on your organization's common patterns, the future of visualization is promising.
                </p>
                
                <p className="mb-6">
                  Ask Flow Chart remains at the forefront of this evolution, constantly refining our AI algorithms to provide more intuitive, powerful, and creative diagramming tools for professionals in every field.
                </p>
                
                <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Conclusion</h2>
                <p className="mb-6">
                  The shift to AI-powered flowcharting represents more than just a technological advancement—it's a fundamental change in how we approach visual communication. By removing technical barriers and streamlining the creation process, these tools enable clearer understanding, better collaboration, and ultimately, more successful outcomes for teams of all kinds.
                </p>
              </div>
              
              {/* Author bio */}
              <div className="mt-16 p-8 bg-background/60 backdrop-blur-sm border border-brand-blue/20 rounded-xl">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full object-cover" 
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Written by {post.author.name}</h3>
                    <p className="text-muted-foreground mb-4">{post.author.role} at Ask Flow Chart</p>
                    <p className="mb-4">
                      Passionate about making complex ideas simple through visual communication. 
                      Specializes in AI applications for productivity and team collaboration.
                    </p>
                    <div className="flex gap-3">
                      <a href="#" className="text-brand-blue hover:text-brand-blue/80 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-brand-blue hover:text-brand-blue/80 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm rounded-full bg-background border border-border hover:border-brand-blue/30 transition-colors">
                  Flowcharts
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-background border border-border hover:border-brand-blue/30 transition-colors">
                  AI Tools
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-background border border-border hover:border-brand-blue/30 transition-colors">
                  Productivity
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-background border border-border hover:border-brand-blue/30 transition-colors">
                  Visualization
                </span>
              </div>
            </div>
          </div>
        </article>
        
        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relPost) => (
                    <Link to={`/blog/${relPost.id}`} key={relPost.id} className="group">
                      <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-brand-blue/20 hover:border-brand-blue/50 overflow-hidden h-full flex flex-col transition-all duration-300">
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={relPost.image} 
                            alt={relPost.title}
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute bottom-4 left-4">
                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-brand-blue/20 text-brand-blue backdrop-blur-sm">
                              {relPost.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold mb-3 group-hover:text-brand-blue transition-colors">
                            {relPost.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-auto text-xs text-muted-foreground">
                            <span>{relPost.date}</span>
                            <span>•</span>
                            <span>{relPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-3">Subscribe to our newsletter</h2>
              <p className="text-muted-foreground mb-6">
                Get the latest articles, tutorials, and updates about AI-powered flowcharts delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md border border-brand-blue/20 bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                />
                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost; 