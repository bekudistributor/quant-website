import { Sparkles, Smartphone, ArrowRight } from "lucide-react";

const FinalCtaSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-bold tracking-[-0.015em] text-[#1F2937] sm:text-4xl lg:text-5xl">
          Ready for calmer, more productive meetings?
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[#374151] lg:text-xl">
          Try Granola for a few meetings today. It's free to get started.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://go.granola.so/download?utm_source=landing_page"
            className="flex h-14 transform-gpu items-center justify-center gap-2 rounded-full bg-[#4ADE80] px-6 font-medium text-black shadow-[inset_0px_0.5px_1px_rgb(255_255_255_/_0.5)] transition-transform hover:scale-[1.02]"
          >
            <Sparkles className="h-5 w-5 text-black/80" />
            <span className="text-lg">Download for Mac</span>
          </a>
          <a
            href="#"
            className="flex h-14 items-center justify-center gap-2.5 rounded-full border border-gray-200 bg-white px-6 font-medium text-gray-800 transition-colors hover:bg-gray-50"
          >
            <Smartphone className="h-5 w-5" />
            <span className="text-lg">Download for iPhone</span>
            <ArrowRight className="h-4 w-4 text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;