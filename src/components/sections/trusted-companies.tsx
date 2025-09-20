"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const fAndBLogos: { src: string; alt: string }[] = [
  {
    src: "/assets/company_logo/Danantara_Indonesia.svg.png",
    alt: "Danantara Indonesia Logo",
  },
  {
    src: "/assets/company_logo/Logo_BUMN_Untuk_Indonesia_2020.svg.png",
    alt: "BUMN Untuk Indonesia Logo",
  },
  {
    src: "/assets/company_logo/Danantara_Indonesia.svg.png",
    alt: "Danantara Indonesia Logo",
  },
  {
    src: "/assets/company_logo/Logo_BUMN_Untuk_Indonesia_2020.svg.png",
    alt: "BUMN Untuk Indonesia Logo",
  },
  {
    src: "/assets/company_logo/Danantara_Indonesia.svg.png",
    alt: "Danantara Indonesia Logo",
  },
  {
    src: "/assets/company_logo/Logo_BUMN_Untuk_Indonesia_2020.svg.png",
    alt: "BUMN Untuk Indonesia Logo",
  },
  {
    src: "/assets/company_logo/Danantara_Indonesia.svg.png",
    alt: "Danantara Indonesia Logo",
  },
  {
    src: "/assets/company_logo/Logo_BUMN_Untuk_Indonesia_2020.svg.png",
    alt: "BUMN Untuk Indonesia Logo",
  },
];

const TrustedCompanies = () => {
  return (
    <section className="py-16 md:py-24 lg:py-20 w-full">
      <div className="container">
        <h3 className="text-center mb-8 font-medium text-muted-foreground">
          Trusted by leading F&B businesses
        </h3>
        <Marquee direction="right" speed={50} gradient={true} gradientColor="white">
          {fAndBLogos.map((logo, index) => (
            <div key={index} className="mx-8">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={50}
                className="w-32 md:w-36 h-auto opacity-80 filter grayscale"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TrustedCompanies;