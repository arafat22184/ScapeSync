"use client";

import FAQ from "./FAQ";
import { useState } from "react";

export default function FAQS() {
  const faqs = [
    {
      question: "Is the app free to use?",
      answer:
        "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
    },
    {
      question: "Can I assign multiple employees to one job?",
      answer:
        "Absolutely. You can assign multiple team members to a single job, making collaboration seamless.",
    },
    {
      question: "Does it work on both mobile and desktop?",
      answer:
        "Yes, our app is fully responsive and works across iOS, Android, and desktop browsers.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We use enterprise-grade encryption and follow best security practices to ensure your data is always safe.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-40 max-w-[996px] mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#212B36]">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-[#637381] mt-4">
          Quick answers to help you get the most out of our app.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FAQ
            key={i}
            faq={faq}
            isOpen={openIndex === i}
            onToggle={() => toggleFAQ(i)}
          />
        ))}
      </div>
    </section>
  );
}
