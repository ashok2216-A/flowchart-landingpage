import React, { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How does the AI-powered flowchart generation work?",
    answer: "Our AI analyzes your text description and identifies key steps, decision points, and processes. It then generates a visually optimized flowchart based on the relationships between these elements, arranging them in a logical sequence with appropriate connections."
  },
  {
    question: "Can I customize the generated flowcharts?",
    answer: "Absolutely! Once the AI generates your initial flowchart, you can use our intuitive editor to customize every aspect - from colors and shapes to connections and text. You can also apply different themes or adjust the layout with a few clicks."
  },
  {
    question: "What formats can I export my flowcharts in?",
    answer: "Free users can export flowcharts as PNG images. Pro and Enterprise users can export in additional formats including SVG, PDF, and high-resolution PNG. Enterprise users also get access to embedding options and API integration."
  },
  {
    question: "Is there a limit to how many flowcharts I can create?",
    answer: "Free users can create up to 5 flowcharts. Pro users get unlimited flowcharts, while Enterprise users get unlimited flowcharts plus team sharing capabilities and collaborative editing features."
  },
  {
    question: "Do you offer team collaboration features?",
    answer: "Yes! Our Enterprise plan includes full team collaboration features, allowing multiple team members to work on the same flowcharts, share comments, and manage permissions. Pro users can share view-only links to their flowcharts."
  },
  {
    question: "Can I try Ask Flow Chart before subscribing?",
    answer: "Yes! Our Free plan never expires and gives you access to the core flowchart generation features. You can create up to 5 flowcharts to experience how the platform works before deciding to upgrade."
  }
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-[10%] -right-[25%] w-[40%] h-[40%] bg-green-500/5 dark:bg-green-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-[15%] -left-[20%] w-[35%] h-[35%] bg-red-500/5 dark:bg-red-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about Ask Flow Chart
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-12 relative">
          {/* Decorative gradient line */}
          {/* <div className="absolute left-4 top-5 bottom-5 w-1 bg-gradient-to-b from-brand-blue via-brand-accent-purple to-brand-accent-cyan rounded-full opacity-30 animate-pulse-slow"></div> */}
          
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <button
                className={`w-full text-left p-5 rounded-lg flex justify-between items-center focus:outline-none transition-all duration-300 relative group overflow-hidden border-1.5 
                  ${openIndex === index
                    ? "bg-card shadow-md border-brand-blue"
                    : "hover:bg-card/50 border-brand-blue/20 hover:border-brand-blue/50"
                  }`}
                onClick={() => toggleFaq(index)}
              >
                {/* Gradient background that appears on hover or when active */}
                <div className={`absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-transparent to-brand-blue/5 opacity-0 transition-opacity duration-500 ${openIndex === index ? 'opacity-100' : 'group-hover:opacity-70'}`}></div>
                
                {/* Blue edge glow effect */}
                <div className={`absolute inset-0 rounded-lg opacity-0 ${openIndex === index ? 'opacity-70' : 'group-hover:opacity-40'} transition-opacity duration-500 overflow-hidden`}>
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent"></div>
                  <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent"></div>
                  <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent"></div>
                </div>
                
                <h3 className="font-medium text-lg relative z-10">{faq.question}</h3>
                <div className={`transform transition-all duration-300 relative z-10 ${openIndex === index ? "rotate-180 text-brand-blue" : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="p-6 pt-3 text-muted-foreground bg-card/50 border border-t-0 border-brand-blue/30 rounded-b-lg shadow-sm">
                  <div className="relative">
                    {/* Subtle animated gradient in the answer */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-brand-blue/5 to-transparent rounded-lg animate-pulse-slow"></div>
                    <p className="relative z-10">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
