import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-x-hidden">
      {/* Background visual elements */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-full w-full bg-white" />
        <div
          className="absolute top-[10%] left-[-20%] h-[500px] w-[500px] rounded-full bg-[var(--granola-background-gradient-start)]/30 opacity-70 blur-3xl"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        />
        <div
          className="absolute top-[40%] right-[-20%] h-[500px] w-[500px] rounded-full bg-[var(--granola-background-gradient-end)]/30 opacity-70 blur-3xl"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 pt-28 pb-16 text-center md:pt-40 lg:gap-8 lg:pb-24">
        <Link
          href="/blog/two-dot-zero"
          className="flex items-center gap-1 rounded-full border border-black/10 px-3 py-1.5 font-medium text-granola-dark-green transition-colors hover:bg-black/5"
        >
          ✨ NEW: Granola for your team
          <ChevronRight className="h-4 w-4 text-granola-light-gray" />
        </Link>

        <h1 className="text-4xl font-bold leading-[0.9] tracking-[-0.02em] text-granola-dark-gray md:text-5xl lg:text-7xl">
          The <span className="text-granola-primary-green">AI notepad</span> for
          people in
          <br className="hidden md:block" />
          back-to-back meetings
        </h1>

        <h2 className="w-full max-w-2xl px-14 text-lg font-medium leading-tight text-granola-light-gray lg:text-2xl">
          Granola takes your raw meeting notes and makes them awesome
        </h2>

        <div className="mt-4 flex flex-col items-center">
          <a
            href="https://go.granola.so/download?utm_source=landing_page"
            className="flex h-12 flex-none transform-gpu items-center justify-center rounded-full bg-granola-primary-green px-6 font-medium text-granola-dark-green shadow-[inset_0_0.5px_1px_rgba(255,255,255,0.5)] transition-all hover:scale-[101%] text-base focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 lg:h-14 lg:text-xl"
          >
            <span className="flex items-center gap-3">
              &nbsp;&nbsp;Download for Mac
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;