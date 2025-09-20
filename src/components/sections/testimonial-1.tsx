import Image from "next/image";

const Testimonial1 = () => {
  return (
    <section className="bg-background w-full">
      <div className="flex flex-col col-span-full gap-4 items-center py-20 md:py-24 mx-auto text-primary px-4">
        <blockquote className="max-w-3xl text-2xl italic text-center text-balance md:text-4xl">
          "Quant has been a game-changer for our restaurant. I can finally see our financial health in real-time, without spending hours on spreadsheets."
        </blockquote>
        <div className="flex gap-4 items-center -ml-2">
          <Image
            src="/assets/testimonials/1731073431057.jpg"
            alt="Dewa Hendarto"
            width={48}
            height={48}
            className="rounded-full w-10 h-10 md:w-12 md:h-12 bg-neutral-200"
          />
          <div className="flex flex-col">
            <span className="font-semibold leading-tight text-lg md:text-xl">
              Dewa Hendarto
            </span>
            <p className="text-base font-normal text-muted-foreground">
              Indonesia Barista Championship, FnB Manager
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial1;