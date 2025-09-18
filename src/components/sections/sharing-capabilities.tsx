import React from 'react';
import Image from 'next/image';

const SharingCapabilities = () => {
  return (
    <section className="relative mx-auto flex w-full max-w-3xl flex-col items-center overflow-visible px-4 py-16 sm:px-6 md:py-24 lg:max-w-6xl lg:px-8 lg:py-20">
      <div className="col-span-full mx-auto flex max-w-2xl flex-col gap-4 pb-8 text-center lg:gap-8 lg:pb-12">
        <h2 className="text-balance text-3xl font-bold leading-[0.95] tracking-[-0.015em] text-granola-dark-green lg:text-5xl">
          Share your notes with one click
        </h2>
        <p className="text-xl font-medium text-granola-dark-gray lg:text-2xl">
          Granola makes it easy to share notes on the platforms you already use
        </p>
      </div>
      <div className="w-full">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/images/next-254527-sharing-graphic.png?"
          alt="Share your notes with one click"
          width={3840}
          height={1920}
          className="hidden w-full md:block"
        />
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/images/next-705258-sharing-graphic-mobile.png?"
          alt="Share your notes with one click"
          width={3840}
          height={2368}
          className="block w-full md:hidden"
        />
      </div>
    </section>
  );
};

export default SharingCapabilities;