"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

const GranolaLogo = ({ className }: { className?: string }) => (
  <svg
    className={cn("mr-3 ml-3 h-7", className)}
    viewBox="0 0 103 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Granola logo"
  >
    <path
      d="M19.497 2.15576H17.201L10.373 14.5158V2.15576H7.98505V25.8438H10.373V16.5158L17.201 25.8438H19.529L12.449 16.0358L19.497 2.15576Z"
      fill="#111827"
    ></path>
    <path
      d="M36.1951 16.1528C36.1951 21.0128 32.5351 26.0408 27.0991 26.0408C21.6631 26.0408 17.9711 20.9808 17.9711 16.1528C17.9711 11.2328 21.6311 6.23676 27.0671 6.23676C32.5031 6.23676 36.1951 11.2928 36.1951 16.1528ZM20.4271 16.1528C20.4271 19.6688 23.0191 23.7488 27.0671 23.7488C31.1151 23.7488 33.7391 19.6688 33.7391 16.1528C33.7391 12.5768 31.1471 8.52876 27.0991 8.52876C23.0511 8.52876 20.4271 12.6088 20.4271 16.1528Z"
      fill="#111827"
    ></path>
    <path
      d="M49.2312 25.8438V9.12375L44.5272 8.35575C44.8752 7.06775 45.4392 6.02775 45.4392 6.02775C46.8152 3.21975 49.3872 1.95575 51.6832 1.95575C51.9952 1.95575 52.3392 1.98775 52.6832 2.05175V4.60375C52.3392 4.53975 51.9952 4.50775 51.6512 4.50775C50.2432 4.50775 49.4472 5.07175 49.2312 6.18775V25.8438H46.7752V6.36375L39.7592 7.61975V9.74775L46.7752 8.59575V25.8438H49.2312Z"
      fill="#111827"
    ></path>
    <path
      d="M63.7849 20.334V6.366H61.3289V25.846H63.7849V23.742C64.6729 25.222 66.5209 26.046 68.4609 26.046C72.2329 26.046 74.8249 23.142 74.8249 18.99C74.8249 14.742 72.2929 11.934 68.5209 11.934C66.5209 11.934 64.6409 12.822 63.7849 14.334V6.366H66.2729C66.2729 6.366 67.2409 4.31 69.3449 4.31C70.0169 4.31 70.4329 4.534 70.4329 4.534L70.9369 2.054C70.9369 2.054 69.8729 1.958 69.0649 1.958C66.4409 1.958 64.3369 4.214 63.7849 5.814V2.158H61.3289V5.782L56.9729 6.646V8.71L61.3289 7.942V25.846H56.9729V23.774L61.3289 24.638V20.334H63.7849ZM63.7849 17.51C63.7849 15.63 64.6089 14.238 66.0169 14.238H67.2729C69.9609 14.238 71.0569 16.142 71.0569 18.494C71.0569 20.91 69.9289 22.846 67.2729 22.846H66.0169C64.5769 22.846 63.7849 21.454 63.7849 19.634V17.51Z"
      fill="#111827"
    ></path>
    <path
      d="M88.4236 16.1528C88.4236 21.0128 84.7636 26.0408 79.3276 26.0408C73.8916 26.0408 70.1996 20.9808 70.1996 16.1528C70.1996 11.2328 73.8596 6.23676 79.2956 6.23676C84.7316 6.23676 88.4236 11.2928 88.4236 16.1528ZM72.6556 16.1528C72.6556 19.6688 75.2476 23.7488 79.2956 23.7488C83.3436 23.7488 85.9676 19.6688 85.9676 16.1528C85.9676 12.5768 83.3756 8.52876 79.3276 8.52876C75.2796 8.52876 72.6556 12.6088 72.6556 16.1528Z"
      fill="#111827"
    ></path>
    <path
      d="M91.313 25.8438V2.15576H88.857V25.8438H91.313Z"
      fill="#111827"
    ></path>
    <path
      d="M102.404 25.8438V9.12375L97.6998 8.35575C98.0478 7.06775 98.6118 6.02775 98.6118 6.02775C99.9878 3.21975 102.56 1.95575 104.856 1.95575C105.168 1.95575 105.512 1.98775 105.856 2.05175V4.60375C105.512 4.53975 105.168 4.50775 104.824 4.50775C103.416 4.50775 102.62 5.07175 102.404 6.18775V25.8438H99.9478V6.36375L92.9318 7.61975V9.74775L99.9478 8.59575V25.8438H102.404Z"
      fill="#111827"
    ></path>
    <rect width="13.0362" height="102.402" transform="matrix(-4.37114e-08 1 1 4.37114e-08 0 0)" fill="white" fillOpacity="0.01"></rect>
  </svg>
);

const Header = () => {
  return (
    <header>
      <nav className="fixed top-0 inset-x-0 z-50 flex flex-none flex-col items-end p-2 h-14 text-primary md:top-6 md:my-2 md:-translate-x-1/2 md:left-1/2 md:right-auto md:rounded-full border-0 md:border-[0.5px] md:border-border backdrop-blur-lg md:shadow-sm md:bg-white/60">
        <div className="flex w-full items-center justify-between gap-2 md:gap-px">
          <Link href="/">
            <GranolaLogo />
          </Link>

          <div className="flex-1 md:hidden" />

          <Link href="/pricing" className="hidden select-none items-center rounded-full border border-transparent px-3 py-1.5 font-medium text-muted-foreground transition-all group hover:bg-black/5 md:flex">
            <span>Pricing</span>
          </Link>
          <Link href="/blog" className="hidden select-none items-center rounded-full border border-transparent px-3 py-1.5 font-medium text-muted-foreground transition-all group hover:bg-black/5 md:flex">
            <span>Blog</span>
          </Link>
          <Link href="/jobs" className="hidden select-none items-center rounded-full border border-transparent px-3 py-1.5 font-medium text-muted-foreground transition-all group hover:bg-black/5 md:flex">
            <span>Careers</span>
          </Link>

          <a
            href="https://go.granola.so/download?utm_source=landing_page"
            className="ml-1 flex flex-none select-none items-center rounded-full border border-black/[.05] px-3 py-1.5 font-medium text-primary transition-all hover:bg-black/[.05]"
          >
            <span className="mr-1.5"></span>
            Download
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