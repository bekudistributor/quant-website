"use client";

import { Sparkles, Mic } from "lucide-react";

const WindowControls = () => (
  <div className="flex items-center w-full space-x-2">
    <div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-red-500"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-yellow-300 border border-yellow-400"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-green-400 border border-green-500"></div>
  </div>
);

const SoundBarsIcon = ({ className }: { className?: string }) => (
  <div className={`flex justify-center items-center w-6 h-6 gap-px ${className}`}>
    <div className="bg-green-500 rounded-full w-[3px] h-2"></div>
    <div className="bg-green-500 rounded-full w-[3px] h-3.5"></div>
    <div className="bg-green-500 rounded-full w-[3px] h-2.5"></div>
  </div>
);

const HowItWorksSection = () => {
  return (
    <section className="relative w-full max-w-3xl px-4 py-16 mx-auto sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl grid gap-2 items-stretch lg:gap-6 lg:grid-cols-2">
      <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center mb-8 lg:gap-8">
        <h2 className="text-3xl font-bold leading-[0.95] tracking-[-0.015em] text-balance text-granola-dark-green lg:text-5xl">
          How it works
        </h2>
      </div>

      <div className="relative flex flex-col gap-4 p-6 overflow-hidden border rounded-xl shadow-lg bg-white">
        <div className="absolute inset-0 z-[-1] select-none transform scale-x-[-1] bg-[radial-gradient(ellipse_at_top_right,var(--color-granola-background-gradient-start)_0%,transparent_50%)] opacity-20"></div>
        <h2 className="text-xl font-semibold lg:text-2xl text-granola-dark-gray">
          Granola is like Apple Notes, but it also&nbsp;&nbsp;
          <span className="inline-flex relative items-baseline">
            <span className="absolute inset-y-0 -inset-x-1 rounded-full bg-green-100"></span>
            <span className="relative z-10 flex items-center pl-2 py-0.5">
              <SoundBarsIcon />
              <span className="pl-1 pr-2 font-semibold text-green-700">transcribes</span>
            </span>
          </span>
          &nbsp;&nbsp;your meeting
        </h2>
        <div className="flex-1"></div>
        <div className="relative overflow-hidden bg-white rounded-lg shadow-lg -mb-8 border w-full aspect-square md:aspect-[4/3]">
          <div className="flex justify-between items-center p-2.5 w-full h-10 border-b">
            <WindowControls />
          </div>
          <div className="relative px-8 py-2 w-full text-sm font-sans space-y-1 text-gray-800">
            <p>100, growingg</p>
            <p>Use tuesday.ai, v manual</p>
            <p>180</p>
            <p>&nbsp;</p>
            <p className="flex items-center">
              "a priority for q2"
              <span className="inline-block w-0.5 h-7 ml-0.5 rounded-full bg-granola-primary-green animate-pulse"></span>
            </p>
          </div>
          <div className="absolute bottom-4 left-1/2 z-10 flex gap-3 items-center p-2.5 bg-white rounded-full border shadow-lg transition-all transform -translate-x-1/2">
            <SoundBarsIcon />
            <Mic className="mr-1 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="relative flex flex-col gap-4 p-6 overflow-hidden border rounded-xl shadow-lg bg-white">
        <div className="absolute inset-0 z-[-1] select-none bg-[radial-gradient(ellipse_at_top_left,var(--color-granola-background-gradient-end)_0%,transparent_50%)] opacity-20"></div>
        <h2 className="text-xl font-semibold lg:text-2xl text-granola-dark-gray">
          When the meeting ends, Granola&nbsp;&nbsp;
          <span className="inline-flex relative items-baseline">
            <span className="absolute inset-y-0 -inset-x-1 rounded-full bg-green-100"></span>
            <span className="relative z-10 flex items-center pl-2 py-0.5">
              <Sparkles className="w-5 h-5 text-green-500" />
              <span className="pl-1 pr-2 font-semibold text-green-700">enhances</span>
            </span>
          </span>
          &nbsp;&nbsp;the notes you've written
        </h2>
        <div className="flex-1"></div>
        <div className="overflow-hidden bg-white rounded-lg shadow-lg -mb-8 w-full border aspect-square md:aspect-[4/3]">
          <div className="flex justify-between items-center p-2.5 w-full h-10 border-b">
            <WindowControls />
          </div>
          <video className="-mt-2 w-full h-auto" autoPlay loop muted playsInline>
            <source src="/homepageAssets/enhancing-looper.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;