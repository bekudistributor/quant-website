import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-x-hidden">
      {/* Gradient Overlay */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--brand-blue)] to-transparent opacity-10"
      />

      {/* Background visual elements */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-full w-full bg-white" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 pt-24 pb-12 text-center md:pt-40 lg:gap-8 lg:pb-24">
        <Link
          href="/blog/automated-expense-categorization"
          className="flex items-center gap-1 rounded-full border border-black/10 px-3 py-1.5 font-medium text-primary transition-colors hover:bg-black/5"
        >
          ✨ NEW: Automated Expense Categorization
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>

        <h1 className="text-4xl font-bold leading-[0.9] tracking-[-0.02em] text-primary md:text-5xl lg:text-7xl">
          AI-Powered Accounting
          <br className="hidden md:block" />
          for the Modern F&B Business
        </h1>

        <h2 className="w-full max-w-2xl px-4 sm:px-6 text-lg font-medium leading-tight text-muted-foreground lg:text-2xl">
          Save time, reduce errors, and increase profitability with an AI assistant that handles your bookkeeping.
        </h2>

        <div className="mt-4 flex flex-col items-center gap-4 md:flex-row">
          <a
            href="/signup"
            className="flex h-12 flex-none transform-gpu items-center justify-center rounded-full bg-[var(--brand-blue)] px-8 font-medium text-white shadow-sm transition-all hover:scale-[101%] text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:h-14 lg:text-xl"
          >
            Start Free Trial
          </a>
          <a
            href="/book-a-demo"
            className="flex h-12 flex-none transform-gpu items-center justify-center rounded-full border border-border bg-transparent px-8 font-medium text-primary shadow-sm transition-all hover:scale-[101%] hover:bg-secondary text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 lg:h-14 lg:text-xl"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;