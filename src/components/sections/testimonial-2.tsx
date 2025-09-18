import Image from 'next/image';
import React from 'react';

const Testimonial2 = () => {
  return (
    <section className="flex flex-col gap-4 items-center py-12 px-4 mx-auto">
      <blockquote className="max-w-3xl text-2xl md:text-3xl italic text-center text-balance text-granola-dark-green">
        The addiction is real - at this point I can’t imagine life without it. Effortlessly powerful
      </blockquote>
      <div className="flex gap-4 items-center -ml-2">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/icons/Adriana%20Vitagliano-2.jpeg?"
          alt="Adriana Vitagliano"
          width={48}
          height={48}
          className="rounded-full size-10 md:size-12 bg-neutral-200"
        />
        <div className="flex flex-col">
          <span className="font-semibold leading-tight md:text-lg text-granola-dark-green">
            Adriana Vitagliano
          </span>
          <p className="text-sm font-normal text-granola-light-gray">
            VC, Firstminute
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial2;