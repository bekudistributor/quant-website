"use client";

import { cn } from "@/lib/utils";
import {
  IconSparkles,
  IconCategory,
  IconBook2,
  IconUsers,
  IconMessageChatbot,
  IconBuildingBank,
} from "@tabler/icons-react";
import React from "react";

const features = [
  {
    title: "AI-Powered Parsing",
    description:
      "Automatically extract every line item from your receipts with industry-leading accuracy.",
    icon: <IconSparkles size={24} />,
  },
  {
    title: "Smart Categorization",
    description:
      "Our AI learns your spending habits and suggests expense categories, saving you manual effort.",
    icon: <IconCategory size={24} />,
  },
  {
    title: "Double-Entry Ledger",
    description:
      "Maintain compliant, audit-proof books with an automated double-entry system running in the background.",
    icon: <IconBook2 size={24} />,
  },
  {
    title: "Collaborative Accounting",
    description:
      "Invite your accountant and team members to collaborate in real-time, with role-based permissions.",
    icon: <IconUsers size={24} />,
  },
  {
    title: "AI-Assistant Reporting",
    description:
      "Ask for financial summaries, spending reports, or vendor totals in plain language and get instant answers.",
    icon: <IconMessageChatbot size={24} />,
  },
  {
    title: "Automated Bank Reconciliation",
    description:
      "Connect your bank accounts and let Quant automatically match transactions with your receipts.",
    icon: <IconBuildingBank size={24} />,
  },
];

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature border-b border-border",
        "md:border-r",
        (index === 0 || index === 3) && "md:border-l",
        (index === 2 || index === 5) && "md:border-r-0",
        index >= 3 && "md:border-b-0",
        "lg:border-b",
        (index === 2 || index === 5) && "lg:border-r",
        index < 3 && "lg:border-b",
        index >= 3 && "lg:border-b-0"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-secondary to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-secondary to-transparent pointer-events-none" />
      )}
      
      <div className="mb-4 relative z-10 px-10 text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-primary">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-20 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center mb-12 lg:gap-8">
          <h2 className="text-3xl font-bold leading-[0.95] tracking-[-0.015em] text-balance text-primary lg:text-5xl">
            Everything you need, nothing you don’t
          </h2>
          <p className="text-lg text-muted-foreground">
            From automated data entry to real-time reports, Quant is the all-in-one platform for your F&B business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 border-t border-border md:border-t-0">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;