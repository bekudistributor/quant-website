import { Badge } from "@/components/ui/badge";
import { BGPattern } from "@/components/ui/bg-pattern";

interface FaqItem {
  question: string;
  answer: string;
}

const quantFaqs: FaqItem[] = [
  {
    question: "What is Quant and who is it for?",
    answer:
      "Quant is an AI-powered accounting platform designed specifically for the F&B industry, including restaurants, cafes, and food chains. It automates bookkeeping tasks like receipt scanning, expense categorization, and financial reporting to save you time and reduce errors.",
  },
  {
    question: "How does the AI work?",
    answer:
      "Our AI uses advanced OCR to read your receipts and invoices. It then intelligently parses the data, categorizes each line item, and prepares it for your review. The system learns from your edits to become more accurate over time.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Absolutely. We use Supabase for our backend, which provides enterprise-grade security, including row-level security and data encryption at rest. Your financial data is only accessible to you and the users you authorize.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer comprehensive support to all our customers. You can reach out to our team via email or live chat for any questions or issues you may encounter. We're here to help you get the most out of Quant.",
  },
];

export const FaqSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-20 bg-white relative">
      <BGPattern variant="dots" />
      <div className="container relative">
        <div className="text-center">
          <Badge className="text-xs font-medium">FAQ</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.015em] text-primary sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 font-medium text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about how Quant can help your F&B business thrive.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-screen-md">
          {quantFaqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-white font-mono text-xs text-primary border border-border">
                {index + 1}
              </span>
              <div>
                <h3 className="font-medium text-primary">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
