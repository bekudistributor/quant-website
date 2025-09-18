"use client";

import { SendHorizonal } from 'lucide-react';

const AiCapabilities = () => {
  const capabilities = [
    "Write a follow up email",
    "What questions did they have?",
    "List action items",
    "What's their budget?",
    "List their objections",
    "Who was in the meeting",
    "What did they say about next week's plan?",
    "Write a blog post",
    "How much have they raised?",
  ];

  return (
    <section className="relative flex flex-col items-center w-full max-w-6xl px-4 py-16 mx-auto overflow-visible sm:px-6 md:py-24 lg:py-20 lg:px-8 gap-4 md:gap-8">
      <div className="absolute inset-0 z-[-1] select-none bg-gradient-to-b from-amber-100/20 via-emerald-50 to-emerald-100/60" />

      <div className="flex flex-col w-full max-w-2xl gap-4 mx-auto text-center lg:gap-8">
        <h2 className="text-3xl font-bold text-balance tracking-[-0.015em] leading-[0.95] text-granola-dark-green lg:text-5xl">
          Put your meetings to work
        </h2>
        <p className="text-xl font-medium text-balance text-granola-dark-gray lg:text-2xl">
          Granola has the latest AI models built in, so it can help you do your post-meeting action items
        </p>
      </div>

      <div className="relative w-full mt-4">
        <div className="flex flex-wrap items-center justify-center w-full max-w-2xl gap-2 mx-auto">
          {capabilities.slice(0, 4).map((text, i) => (
            <button key={`cap-1-${i}`} className="flex-none px-3 font-medium leading-none text-gray-800 bg-black/10 rounded-full select-none h-10 flex items-center justify-center border border-black/10 hover:bg-black/[.15] transition-colors">
              {text}
            </button>
          ))}
          
          <div className="relative w-full h-10" />
          
          <button className="flex-none px-3 font-medium leading-none text-gray-800 bg-black/10 rounded-full select-none h-10 flex items-center justify-center border border-black/10 hover:bg-black/[.15] transition-colors">
            {capabilities[4]}
          </button>
          <button className="flex-none hidden px-3 font-medium leading-none text-gray-800 bg-black/10 rounded-full select-none h-10 md:flex items-center justify-center border border-black/10 hover:bg-black/[.15] transition-colors">
            {capabilities[5]}
          </button>
          
          <div className="relative w-full h-10 md:hidden" />
          
          {capabilities.slice(6, 9).map((text, i) => (
            <button key={`cap-2-${i}`} className="flex-none px-3 font-medium leading-none text-gray-800 bg-black/10 rounded-full select-none h-10 flex items-center justify-center border border-black/10 hover:bg-black/[.15] transition-colors">
              {text}
            </button>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center w-full px-8 md:px-0">
          <div className="relative flex items-center w-full max-w-md">
            <input
              type="text"
              placeholder="Ask about meeting"
              className="w-full h-16 text-lg font-medium text-center placeholder-neutral-400 bg-white border rounded-full shadow-2xl focus:outline-none focus:ring-2 focus:ring-granola-primary-green/80"
            />
            <button aria-label="Ask about meeting" className="absolute right-2 flex items-center justify-center w-12 h-12 text-white bg-granola-dark-green rounded-full transition-transform hover:scale-105">
              <SendHorizonal className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiCapabilities;