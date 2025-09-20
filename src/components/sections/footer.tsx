import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const QuantLogo = () => (
  <Image
    src="/assets/Quant logo.svg"
    alt="Quant Logo"
    width={103}
    height={28}
    className="h-8 w-auto"
  />
);

// Using inline SVGs for the social icons for simplicity and control.
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M714.163 519.284L1160.89 0H998.807L655.31 454.634L376.333 0H0L468.492 682.328L0 1226.33H162.086L528.923 746.99L823.328 1226.33H1199.66L714.163 519.284ZM673.328 660.101L626.516 587.352L182.235 55.4325H318.62L673.328 660.101Z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.761 24 24 21.761 24 19V5C24 2.239 21.761 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 9.771 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.604V19Z" />
  </svg>
);

const linkColumns = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '/#features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Book a Demo', href: '/book-a-demo' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/jobs' },
      { name: 'Contact Us', href: 'mailto:hello@quant.so' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  },
];

const RenderLink = ({ link }: { link: { name: string; href: string } }) => {
  const className = "text-foreground transition-colors hover:text-[var(--brand-blue)]";
  const isExternal = link.href.startsWith('http') || link.href.startsWith('mailto');
  
  if (isExternal) {
    return <a href={link.href} className={className} target="_blank" rel="noopener noreferrer">{link.name}</a>;
  }
  return <Link href={link.href} className={className}>{link.name}</Link>;
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-8 py-12">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="flex flex-col gap-6">
            <Link href="/" aria-label="Home">
              <QuantLogo />
            </Link>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <span>© Quant Inc. 2025</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-8 sm:flex-row sm:justify-end sm:gap-16">
            <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
              {linkColumns.map((column) => (
                <div key={column.title} className="flex flex-col gap-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">{column.title}</h3>
                  <div className="flex flex-col gap-3">
                    {column.links.map((link) => (
                      <RenderLink key={link.name} link={link} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-4 text-muted-foreground">
              <a href="https://www.linkedin.com/company/quant-so/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a href="https://x.com/quant-so" target="_blank" rel="noopener noreferrer" aria-label="X" className="transition-colors hover:text-foreground">
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}