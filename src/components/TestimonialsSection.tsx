import React, { useState, useEffect, useRef } from "react";

type Testimonial = {
  content: string;
  author: string;
  position: string;
  rating: number;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    content: "Ask Flow Chart has completely transformed how our team documents processes. What used to take hours now takes minutes!",
    author: "Sarah Johnson",
    position: "Product Manager",
    rating: 5,
    avatar: "/images/avatars/avatar-sarah.jpg",
  },

  {
    content: "As someone who's not design-oriented, this tool has been a game-changer for creating professional flowcharts quickly.",
    author: "David Kim",
    position: "Software Developer",
    rating: 5,
    avatar: "/images/avatars/avatar-david.jpg",
  },

  {
    content: "We've cut our documentation time in half since implementing Ask Flow Chart across our entire organization.",
    author: "Robert Wilson",
    position: "Operations Director",
    rating: 5,
    avatar: "/images/avatars/avatar-robert.jpg",
  },

  {
    content: "The customer support team is as impressive as the tool itself. Any questions I had were answered promptly and thoroughly.",
    author: "Thomas Garcia",
    position: "IT Manager",
    rating: 4,
    avatar: "/images/avatars/avatar-thomas.jpg",
  },

  {
    content: "The ability to version control our process diagrams has revolutionized our team's workflow. We can now trace changes and improvements over time.",
    author: "James Wilson",
    position: "Engineering Manager",
    rating: 5,
    avatar: "/images/avatars/avatar-james.jpg",
  },

];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  return (
    <section className="py-20 md:py-28 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
      {/* <div className="absolute top-[20%] -right-[30%] w-[40%] h-[40%] bg-yellow-500/10 dark:bg-yellow-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-[10%] -left-[20%] w-[30%] h-[30%] bg-purple-300/10 dark:bg-purple-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div> */}
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-title">What Our Users Say</h2>
          <p className="section-subtitle">
            Join thousands of satisfied users who have transformed their workflow
          </p>
        </div>

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden relative h-[240px] sm:h-[100px] md:h-[240px]">
            <div 
              className="absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-background/60 backdrop-blur-md border border-brand-blue/30 hover:border-brand-blue/70 p-6 rounded-xl h-full transition-all duration-300 group relative">
                    {/* Blue edge glow effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
                      <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
                      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
                      <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
                    </div>
                    
                    <div className="mb-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 ${i < testimonial.rating ? "text-brand-accent-yellow" : "text-gray-600"}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">{testimonial.content}</p>
                    <div className="flex items-center">
                      <div className="size-10 rounded-full overflow-hidden mr-4 bg-muted">
                        <img 
                          src={testimonial.avatar} 
                          alt={`${testimonial.author} profile image`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to initials if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.classList.add('bg-gradient-to-r', 'from-brand-blue', 'to-brand-blue/70', 'flex', 'items-center', 'justify-center', 'font-medium');
                              parent.textContent = testimonial.author.split(' ').map(n => n[0]).join('');
                            }
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 items-center">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-brand-blue/30 flex items-center justify-center mr-4 hover:bg-background/80 hover:border-brand-blue/70 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? "bg-brand-blue" : "bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-brand-blue/30 flex items-center justify-center ml-4 hover:bg-background/80 hover:border-brand-blue/70 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
