"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { clinic } from "@/config/clinic";
import { trackPhoneCall } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio",    href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "El Doctor", href: "#doctor" },
  { label: "Opiniones", href: "#testimonios" },
  { label: "Contacto",  href: "#contacto" },
];

const sectionIds = ["hero", "servicios", "doctor", "testimonios", "contacto"];

/* Limpia el overflow de body y cierra el menú antes de que el browser
   procese la navegación por ancla. Esto evita que scroll quede bloqueado. */
function closeMobileMenu(setMenuOpen: (v: boolean) => void) {
  document.body.style.overflow = "";
  setMenuOpen(false);
}

export function Header() {
  const [scrolled, setScrolled]    = useState(false);
  const [menuOpen, setMenuOpen]    = useState(false);
  const [activeSection, setActive] = useState<string>("hero");

  /* Shadow al hacer scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Cerrar menú al hacer scroll o resize — limpia overflow primero */
  useEffect(() => {
    const close = () => {
      if (menuOpen) {
        document.body.style.overflow = "";
        setMenuOpen(false);
      }
    };
    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("scroll", close);
      window.removeEventListener("resize", close);
    };
  }, [menuOpen]);

  /* IntersectionObserver para sección activa */
  const onIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    });
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onIntersect]);

  /* Bloquear scroll del body cuando el menú está abierto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 h-16 md:h-20 transition-all duration-300 bg-white",
          scrolled ? "shadow-md border-b border-gray-100" : "shadow-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">

          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-tight shrink-0 group"
            aria-label="Clínica Dental Dr. Rafael Godoy — Inicio"
          >
            <span className="text-sm sm:text-base font-bold text-teal-600 group-hover:text-teal-700 transition-colors leading-none">
              Dr. Rafael Godoy
            </span>
            <span className="text-[10px] text-gray-400 font-medium tracking-wide leading-none mt-0.5">
              CLÍNICA DENTAL · CÓRDOBA
            </span>
          </Link>

          {/* Nav desktop */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-0.5"
          >
            {navItems.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    isActive
                      ? "text-teal-600 bg-teal-50"
                      : "text-gray-600 hover:text-teal-600 hover:bg-gray-50"
                  )}
                  aria-current={isActive ? "true" : undefined}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-teal-500 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Teléfono desktop */}
          <a
            href={`tel:${clinic.contact.phone}`}
            onClick={() => trackPhoneCall("header")}
            className="hidden sm:flex items-center gap-2 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white px-4 py-2 rounded-full font-bold text-sm transition-all duration-200 shadow-sm hover:shadow-md min-h-[40px] shrink-0"
            aria-label={`Llamar: ${clinic.contact.phoneDisplay}`}
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            {clinic.contact.phoneDisplay}
          </a>

          {/* Mobile: teléfono + hamburguesa */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${clinic.contact.phone}`}
              onClick={() => trackPhoneCall("header_mobile")}
              className="flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white pl-3 pr-4 py-2 rounded-full font-bold text-xs transition-colors min-h-[40px]"
              aria-label={`Llamar: ${clinic.contact.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              {clinic.contact.phoneDisplay}
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menú mobile */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menú de navegación"
        aria-modal="true"
        className={cn(
          "fixed inset-0 z-30 pt-16 transition-all duration-300 sm:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-black/40 transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => closeMobileMenu(setMenuOpen)}
          aria-hidden="true"
        />
        {/* Panel */}
        <nav
          className={cn(
            "relative bg-white border-b border-gray-100 shadow-xl transition-all duration-300 px-4 pb-5",
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          )}
          aria-label="Menú móvil"
        >
          <ul className="divide-y divide-gray-100">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => closeMobileMenu(setMenuOpen)}
                  className="flex items-center py-4 text-base font-semibold text-gray-800 hover:text-teal-600 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${clinic.contact.phone}`}
            onClick={() => {
              trackPhoneCall("mobile_menu");
              closeMobileMenu(setMenuOpen);
            }}
            className="mt-4 flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-2xl text-sm transition-colors min-h-[48px]"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Llamar: {clinic.contact.phoneDisplay}
          </a>
        </nav>
      </div>
    </>
  );
}
