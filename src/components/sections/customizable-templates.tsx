"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";

// The template names for the buttons
const templates = [
  "Customer discovery",
  "1 on 1",
  "User Interview",
  "Pitch",
  "Standup",
];

// A helper component for sections inside the template mockup
const TemplateSection = ({ title, bars }: { title: string; bars: string[] }) => (
  <div>
    <h3 className="text-sm font-semibold text-granola-dark-green mb-3">{title}</h3>
    <div className="space-y-2.5">
      {bars.map((widthClass, index) => (
        <div key={index} className={`h-3.5 rounded-full bg-gray-200 ${widthClass}`} />
      ))}
    </div>
  </div>
);

// The main section component
const CustomizableTemplates = () => {
  // State to track the currently selected template
  const [activeTemplate, setActiveTemplate] = useState("Customer discovery");

  return (
    <section className="overflow-hidden bg-white py-16 md:py-24 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12 lg:gap-20">
          
          {/* Left Column: Text and Desktop Buttons */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl lg:text-5xl text-granola-dark-green font-bold tracking-[-0.015em] leading-[0.95] text-balance">
              Customizable templates for your most common meeting types
            </h2>
            <p className="mt-4 text-xl lg:text-2xl text-granola-dark-gray font-medium text-balance">
              Get notes in the exact format your team needs.
            </p>
            
            {/* Desktop Template Buttons */}
            <div className="hidden md:flex flex-wrap gap-2 my-8">
              {templates.map((template) => (
                <button
                  key={template}
                  onClick={() => setActiveTemplate(template)}
                  className={`flex-none px-4 h-12 flex items-center justify-center text-lg font-medium rounded-full transition-colors border outline-none
                  ${
                    activeTemplate === template
                      ? 'bg-granola-dark-green text-white border-transparent'
                      : 'bg-transparent text-granola-light-gray border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {template}
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Column: Template Mockup */}
          <div className="relative min-h-[550px] sm:min-h-[600px] md:min-h-0 md:transform md:rotate-3 md:-skew-y-2">
            <div className="absolute inset-0">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl border border-granola-card-border h-full flex flex-col">
                <h2 className="font-semibold text-xl sm:text-2xl text-granola-dark-green">Upstart Health intro call</h2>
                <p className="flex items-center gap-2 mt-1 text-sm text-granola-light-gray">
                  <Calendar className="w-4 h-4" />
                  Today 1:30 AM Jim, Michaela +5
                </p>
                
                <div className="mt-8 space-y-6">
                  <TemplateSection title="About them" bars={['w-11/12', 'w-4/5']} />
                  <TemplateSection title="Key takeaways" bars={['w-full', 'w-3/4']} />
                  <TemplateSection title="Decision-making insights" bars={['w-11/12', 'w-full', 'w-1/2']} />
                  <TemplateSection title="Budget & Timeline" bars={['w-5/6']} />
                  <TemplateSection title="Next Steps" bars={['w-full', 'w-2/3']} />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Template Buttons */}
          <div className="md:hidden flex flex-wrap gap-2 mt-8 justify-center">
            {templates.map((template) => (
              <button
                key={template}
                onClick={() => setActiveTemplate(template)}
                className={`flex-none px-4 py-2.5 text-base font-medium rounded-full transition-colors border
                ${
                  activeTemplate === template
                    ? 'bg-granola-dark-green text-white border-transparent'
                    : 'bg-transparent text-granola-light-gray border-gray-300 hover:bg-gray-100'
                }`}
              >
                {template}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizableTemplates;