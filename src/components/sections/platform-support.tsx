import Image from 'next/image';

const platformLogos = [
  {
    name: 'Google Meet',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/images/next-463371-meet-logo-2.jpg?',
    alt: 'meet-logo logo',
  },
  {
    name: 'Slack',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/images/next-161473-slack-logo-2.jpg?',
    alt: 'slack-logo logo',
  },
  {
    name: 'Microsoft Teams',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/images/next-704622-teams-logo-2.jpg?',
    alt: 'teams-logo logo',
  },
  {
    name: 'WebEx',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/images/next-262269-webex-logo-2.jpg?',
    alt: 'webex-logo logo',
    hiddenOnMobile: true,
  },
  {
    name: 'Zoom',
    src: 'placeholder',
    alt: 'zoom-logo logo',
  },
];

const PlatformSupport = () => {
  return (
    <section className="flex flex-col items-center px-4 py-16 overflow-visible relative w-full max-w-3xl sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl gap-4 lg:gap-8">
      <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8">
        <h2 className="text-3xl lg:text-5xl text-granola-dark-green font-bold tracking-[-0.015em] leading-[0.95] text-balance">
          Works on all platforms, no meeting bots
        </h2>
        <p className="text-xl font-medium lg:text-2xl text-granola-dark-gray">
          Granola transcribes your computer's audio directly, with no meeting bots joining your call
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center w-full">
        {platformLogos.map((logo) => (
          <div
            key={logo.name}
            className={`flex justify-center items-center ${
              logo.hiddenOnMobile ? 'hidden md:flex' : ''
            }`}
          >
            {logo.src === 'placeholder' ? (
              <div className="w-20 md:w-28 flex justify-center items-center">
                <div className="bg-[#0b5cff] flex h-10 w-10 items-center justify-center rounded-lg md:h-14 md:w-14 md:rounded-xl">
                  <span className="font-bold text-white text-base md:text-lg">zoom</span>
                </div>
              </div>
            ) : (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="w-20 md:w-28"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformSupport;