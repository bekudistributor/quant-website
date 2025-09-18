import Image from "next/image";

const logosRow1: { src: string; alt: string }[] = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/svgs/posthog-3.svg?",
    alt: "PostHog Logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/svgs/ramp-5.svg?",
    alt: "Ramp Logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/svgs/linear-6.svg?",
    alt: "Linear Logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/svgs/index-7.svg?",
    alt: "Index Ventures Logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/svgs/brex-8.svg?",
    alt: "Brex Logo",
  },
];

const logosRow2: { src: string; alt: string }[] = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/svgs/replit-9.svg?",
    alt: "Replit Logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/svgs/perplexity-11.svg?",
    alt: "Perplexity Logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/svgs/nytimes-12.svg?",
    alt: "The New York Times Logo",
  },
];

const TrustedCompanies = () => {
  return (
    <section className="flex overflow-visible relative flex-col items-center px-4 py-16 w-full max-w-3xl sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl gap-0 pb-0 mt-8 lg:gap-0">
      <h3 className="mb-8 font-medium text-secondary">
        Trusted by individuals at
      </h3>

      <div className="flex overflow-hidden relative">
        <div className="flex flex-none items-center gap-4 animate-marquee">
          {logosRow1.map((logo, index) => (
            <Image
              key={`row1-a-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={192}
              height={48}
              className="w-40 md:w-48 h-auto opacity-80 filter grayscale"
            />
          ))}
        </div>
        <div
          className="flex flex-none items-center gap-4 animate-marquee"
          aria-hidden="true"
        >
          {logosRow1.map((logo, index) => (
            <Image
              key={`row1-b-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={192}
              height={48}
              className="w-40 md:w-48 h-auto opacity-80 filter grayscale"
            />
          ))}
        </div>
        <div className="absolute left-0 w-1/3 h-full bg-gradient-to-l from-transparent to-background"></div>
        <div className="absolute right-0 w-1/3 h-full bg-gradient-to-r from-transparent to-background"></div>
      </div>

      <div className="flex overflow-hidden relative">
        <div className="flex flex-none items-center gap-4 animate-marquee-reverse">
          {logosRow2.map((logo, index) => (
            <Image
              key={`row2-a-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={192}
              height={48}
              className="w-40 md:w-48 h-auto opacity-80 filter grayscale"
            />
          ))}
        </div>
        <div
          className="flex flex-none items-center gap-4 animate-marquee-reverse"
          aria-hidden="true"
        >
          {logosRow2.map((logo, index) => (
            <Image
              key={`row2-b-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={192}
              height={48}
              className="w-40 md:w-48 h-auto opacity-80 filter grayscale"
            />
          ))}
        </div>
        <div className="absolute left-0 w-1/3 h-full bg-gradient-to-l from-transparent to-background"></div>
        <div className="absolute right-0 w-1/3 h-full bg-gradient-to-r from-transparent to-background"></div>
      </div>
    </section>
  );
};

export default TrustedCompanies;