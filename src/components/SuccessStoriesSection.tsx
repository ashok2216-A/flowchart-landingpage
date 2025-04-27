import React from "react";

const stories = [
  {
    name: "Acme Corp",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=facearea&w=600&q=80",
    text: "Acme Corp reduced project planning time by 40% using Ask Flow Chart to visualize all processes up front.",
    person: "Emily Stone, Operations Lead",
  },
  {
    name: "ZenSoft",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=600&q=80",
    text: "ZenSoft's onboarding flow became seamless for remote hires after deploying auto-generated flowcharts.",
    person: "Robert Lee, HR Manager",
  },
  {
    name: "Techverse",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=facearea&w=600&q=80",
    text: "Documentation with clear diagrams significantly cut down Techverse's customer support tickets.",
    person: "Sara Yu, Customer Success",
  },
];

export const SuccessStoriesSection = () => (
  <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-[10%] right-[5%] w-[50%] h-[50%] bg-brand-blue/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] bg-brand-blue/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-brand-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
    </div>
    
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-title text-white">Success Stories</h2>
        <p className="section-subtitle text-gray-300 max-w-2xl mx-auto">
          See how teams are saving hours and making processes visible by switching to Ask Flow Chart.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((s, i) => (
          <div
            key={i}
            className="bg-slate-800/60 backdrop-blur-sm border-1.5 border-brand-blue/30 hover:border-brand-blue rounded-xl shadow-lg p-6 flex flex-col items-center text-center animate-fade-in transition-all duration-300 group relative"
            style={{ animationDelay: `${i * 0.1 + 0.1}s` }}
          >
            {/* Blue edge glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-70"></div>
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-70"></div>
            </div>
            
            <img
              src={s.image}
              alt={s.name + " team"}
              className="w-28 h-28 rounded-xl shadow-lg object-cover mb-6 border-2 border-brand-blue/30 group-hover:border-brand-blue/50 transition-all duration-300"
            />
            <blockquote className="italic text-lg text-white mb-4">&ldquo;{s.text}&rdquo;</blockquote>
            <div className="font-bold text-white">{s.name}</div>
            <div className="text-sm text-slate-300">{s.person}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
