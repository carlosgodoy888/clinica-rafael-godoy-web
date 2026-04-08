"use client";

import { useEffect } from "react";

/**
 * Monta un IntersectionObserver global que añade `.is-visible`
 * a todos los elementos con atributo [data-reveal] cuando entran
 * en el viewport. No renderiza nada en el DOM.
 */
export function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Una vez visible ya no necesita observarse
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
