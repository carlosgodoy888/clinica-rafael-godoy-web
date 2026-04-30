"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type ServiceFAQItem = {
  question: string;
  answer: string;
};

type ServiceFAQProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  items: ServiceFAQItem[];
};

export function ServiceFAQ({
  eyebrow = "Dudas frecuentes",
  title = "Preguntas frecuentes",
  intro = "Resolvemos las dudas más habituales antes de pedir cita.",
  items,
}: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
          {eyebrow}
        </p>

        <h2
          id="faq-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950"
        >
          {title}
        </h2>

        {intro && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
            {intro}
          </p>
        )}

        <div className="mt-10 divide-y divide-gray-200 border-t border-b border-gray-200">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `service-faq-answer-${index}`;
            const questionId = `service-faq-question-${index}`;

            return (
              <div key={item.question}>
                <button
                  id={questionId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left transition-colors hover:text-teal-700"
                >
                  <span className="text-base md:text-lg font-semibold text-gray-900">
                    {item.question}
                  </span>

                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-all duration-200",
                      isOpen && "rotate-45 border-teal-600 bg-teal-50 text-teal-700"
                    )}
                    aria-hidden="true"
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] pb-5"
                      : "grid-rows-[0fr] pb-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl text-sm md:text-base leading-relaxed text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}