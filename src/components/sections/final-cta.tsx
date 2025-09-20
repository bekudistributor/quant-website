import { ArrowRight } from "lucide-react";

const FinalCtaSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-bold tracking-[-0.015em] text-primary sm:text-4xl lg:text-5xl">
          Take control of your finances and boost your profitability
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground lg:text-xl">
          Get started with Quant today. It's free to get started, no credit card required.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/signup"
            className="flex h-14 transform-gpu items-center justify-center gap-2 rounded-full bg-[var(--brand-blue)] px-8 font-medium text-white shadow-sm transition-transform hover:scale-[1.02]"
          >
            <span className="text-lg">Start Free Trial</span>
          </a>
          <a
            href="/book-a-demo"
            className="flex h-14 items-center justify-center gap-2.5 rounded-full border border-border bg-white px-8 font-medium text-primary transition-colors hover:bg-secondary"
          >
            <span className="text-lg">Book a Demo</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;