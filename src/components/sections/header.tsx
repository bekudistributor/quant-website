"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const QuantLogo = ({ className }: { className?: string }) => (
  <Image
    src="/assets/Quant logo.svg"
    alt="Quant Logo"
    width={103}
    height={28}
    className="mr-3 ml-3 h-6 w-auto"
  />
);

const Header = () => {
  return (
    <header>
      <nav className="fixed top-0 inset-x-0 z-50 flex flex-none flex-col items-end p-2 h-14 text-primary md:top-6 md:my-2 md:-translate-x-1/2 md:left-1/2 md:right-auto md:rounded-full border-0 md:border-[0.5px] md:border-border backdrop-blur-lg md:shadow-sm md:bg-white/60">
        <div className="flex w-full items-center justify-between gap-2 md:gap-px">
          <Link href="/">
            <QuantLogo />
          </Link>

          <div className="flex-1 md:hidden" />

          <Link href="/#features" className="hidden select-none items-center rounded-full border border-transparent px-3 py-1.5 font-medium text-muted-foreground transition-all group hover:bg-black/5 md:flex">
            <span>Features</span>
          </Link>
          <Link href="/pricing" className="hidden select-none items-center rounded-full border border-transparent px-3 py-1.5 font-medium text-muted-foreground transition-all group hover:bg-black/5 md:flex">
            <span>Pricing</span>
          </Link>
          <Link href="/blog" className="hidden select-none items-center rounded-full border border-transparent px-3 py-1.5 font-medium text-muted-foreground transition-all group hover:bg-black/5 md:flex">
            <span>Blog</span>
          </Link>

          <Link href="/login" className="ml-1 flex flex-none select-none items-center rounded-full px-3 py-1.5 font-medium text-primary transition-all hover:bg-black/[.05]">
            Login
          </Link>

          <a
            href="/signup"
            className="ml-1 flex flex-none select-none items-center rounded-full px-4 py-1.5 font-medium text-white transition-all bg-[var(--brand-blue)] hover:brightness-95"
          >
            Start Free Trial
          </a>

          <button className="p-2 transition-all md:hidden" aria-label="Open menu">
            <Menu className="size-6" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;