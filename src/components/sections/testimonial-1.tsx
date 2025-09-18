import Image from "next/image";

const Testimonial1 = () => {
  return (
    <section className="bg-background w-full">
      <div className="flex flex-col col-span-full gap-4 items-center py-12 mx-auto text-granola-dark-green px-4">
        <blockquote className="max-w-3xl text-2xl italic text-center text-balance md:text-3xl">
          Granola has become indispensable - feels like I'm living in the future.
        </blockquote>
        <div className="flex gap-4 items-center -ml-2">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/icons/John%20Borthwick-1.jpeg?"
            alt="John Borthwick"
            width={48}
            height={48}
            className="rounded-full w-10 h-10 md:w-12 md:h-12 bg-neutral-200"
          />
          <div className="flex flex-col">
            <span className="font-semibold leading-tight md:text-lg">
              John Borthwick
            </span>
            <p className="text-sm font-normal text-granola-light-gray">
              Investor, Betaworks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial1;