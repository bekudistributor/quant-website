"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "$20",
    description: "For small cafes and single-location restaurants.",
    features: [
      "50 receipt scans per month",
      "AI-powered data extraction",
      "Basic expense categorization",
      "Standard financial reports",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$50",
    description: "For growing restaurants and small chains.",
    features: [
      "200 receipt scans per month",
      "Smart expense categorization",
      "Double-entry ledger",
      "AI-assistant reporting",
      "Priority email support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$90",
    description: "For large chains and multi-location businesses.",
    features: [
      "Unlimited receipt scans",
      "Collaborative accounting features",
      "Automated bank reconciliation",
      "Dedicated account manager",
      "24/7 phone support",
    ],
    featured: false,
  },
];

export const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-20 bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-[-0.015em] text-primary sm:text-4xl lg:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Choose the plan that's right for your business. No hidden fees, ever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "flex flex-col p-8 rounded-2xl border",
                tier.featured ? "border-[var(--brand-blue)] shadow-2xl" : "border-border"
              )}
            >
              <h3 className="text-xl font-semibold text-primary">{tier.name}</h3>
              <p className="mt-2 text-muted-foreground">{tier.description}</p>
              <div className="mt-6">
                <span className="text-5xl font-bold text-primary">{tier.price}</span>
                <span className="ml-2 text-muted-foreground">/ month</span>
              </div>
              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[var(--brand-blue)]" />
                    <span className="text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <a
                  href="/signup"
                  className={cn(
                    "flex h-12 w-full items-center justify-center rounded-full font-medium transition-colors",
                    tier.featured
                      ? "bg-[var(--brand-blue)] text-white hover:brightness-95"
                      : "bg-secondary text-primary hover:bg-border"
                  )}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
