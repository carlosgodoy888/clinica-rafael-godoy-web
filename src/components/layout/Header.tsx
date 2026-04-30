"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { clinic } from "@/config/clinic";
import { primaryTreatments, secondaryTreatments } from "@/config/treatments";
import { trackPhoneCall } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio", href: "/", sectionId: "hero" },
  { label: "El Doctor", href: "/#doctor", sectionId: "doctor" },
  { label: "Opiniones", href: "/#testimonios", sectionId: "testimonios" },
  { label: "Contacto", href: "/#contacto", sectionId: "contacto" },
];

const sectionIds = ["hero", "servicios", "doctor", "testimonios", "contacto"];

function closeMobileMenu(setMenuOpen: (value: boolean) => void) {
  document.body.style.overflow = "";
  setMenuOpen(false);
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isTreatmentArea =
    pathname === "/tratamientos" || pathname.startsWith("/tratamientos/");

  const servicesMenuRef = useRef<HTMLDivElement | null>(null);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeSection, setActive] = useState<string>("hero");

  const isServicesActive =
    isTreatmentArea || (isHome && activeSection === "servicios");

  const closeServicesMenu = useCallback(() => {
    setServicesOpen(false);
  }, []);

  const closeAllMenus = useCallback(() => {
    document.body.style.overflow = "";
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setMenuOpen(false);
  }, []);

  /* Shadow al hacer scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Cerrar menú desktop con clic fuera o Escape */
  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!servicesMenuRef.current) return;

      if (!servicesMenuRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        document.body.style.overflow = "";
        setServicesOpen(false);
        setMobileServicesOpen(false);
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  /* Cerrar menú móvil al hacer scroll o resize */
  useEffect(() => {
    const close = () => {
      if (menuOpen) {
        document.body.style.overflow = "";
        setMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };

    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("resize", close);

    return () => {
      window.removeEventListener("scroll", close);
      window.removeEventListener("resize", close);
    };
  }, [menuOpen]);

  /* IntersectionObserver solo en home */
  const onIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(onIntersect, {
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome, onIntersect]);

  /* Bloquear scroll del body cuando el menú móvil está abierto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-40 h-16 bg-white transition-all duration-300 md:h-20",
          scrolled ? "border-b border-gray-100 shadow-md" : "shadow-sm"
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeAllMenus}
            className="flex shrink-0 flex-col leading-tight group"
            aria-label="Clínica Dental Dr. Rafael Godoy — Inicio"
          >
            <span className="text-sm font-bold leading-none text-teal-600 transition-colors group-hover:text-teal-700 sm:text-base">
              Dr. Rafael Godoy
            </span>
            <span className="mt-0.5 text-[10px] font-medium leading-none tracking-wide text-gray-400">
              CLÍNICA DENTAL · CÓRDOBA
            </span>
          </Link>

          {/* Nav desktop */}
          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-0.5 md:flex"
          >
            {/* Inicio */}
            <Link
              href="/"
              onClick={closeServicesMenu}
              className={cn(
                "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200",
                isHome && activeSection === "hero"
                  ? "bg-teal-50 text-teal-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-teal-600"
              )}
              aria-current={isHome && activeSection === "hero" ? "page" : undefined}
            >
              Inicio

              {isHome && activeSection === "hero" && (
                <span
                  className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 rounded-full bg-teal-500"
                  aria-hidden="true"
                />
              )}
            </Link>

            {/* Servicios dropdown desktop */}
            <div
              ref={servicesMenuRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((value) => !value)}
                className={cn(
                  "relative inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200",
                  isServicesActive || servicesOpen
                    ? "bg-teal-50 text-teal-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-teal-600"
                )}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-controls="services-desktop-menu"
              >
                Servicios
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />

                {(isServicesActive || servicesOpen) && (
                  <span
                    className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 rounded-full bg-teal-500"
                    aria-hidden="true"
                  />
                )}
              </button>

              <div
                id="services-desktop-menu"
                className={cn(
                  "absolute left-1/2 top-full z-50 mt-3 w-[780px] -translate-x-1/2 rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl shadow-gray-900/10 transition-all duration-200",
                  servicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                )}
              >
                <div className="grid gap-5">
                  <div className="flex items-start justify-between gap-6 border-b border-gray-100 pb-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                        Servicios dentales
                      </p>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
                        Accede a la sección de servicios, consulta todos los tratamientos
                        o entra directamente en el tratamiento que necesitas.
                      </p>
                    </div>

                    <a
                      href={`tel:${clinic.contact.phone}`}
                      onClick={() => {
                        trackPhoneCall("services_dropdown");
                        closeServicesMenu();
                      }}
                      className="inline-flex min-h-[40px] shrink-0 items-center justify-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-teal-700"
                      aria-label={`Llamar: ${clinic.contact.phoneDisplay}`}
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                      Llamar
                    </a>
                  </div>

                  {/* Accesos destacados */}
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/#servicios"
                      onClick={closeServicesMenu}
                      className="group rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-colors hover:border-teal-200 hover:bg-teal-50"
                    >
                      <span className="text-sm font-bold text-gray-950 group-hover:text-teal-700">
                        Resumen de servicios
                      </span>
                      <p className="mt-1 text-xs leading-relaxed text-gray-600">
                        Vuelve a la sección principal de servicios en la home.
                      </p>
                    </Link>

                    <Link
                      href="/tratamientos"
                      onClick={closeServicesMenu}
                      className="group rounded-2xl border border-teal-100 bg-teal-50 p-4 transition-colors hover:border-teal-300 hover:bg-teal-100"
                    >
                      <span className="text-sm font-bold text-teal-800">
                        Todos los tratamientos
                      </span>
                      <p className="mt-1 text-xs leading-relaxed text-teal-800/75">
                        Consulta el catálogo completo de tratamientos dentales.
                      </p>
                    </Link>
                  </div>

                  {/* Tratamientos principales */}
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Tratamientos principales
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                      {primaryTreatments.map((treatment) => (
                        <Link
                          key={treatment.id}
                          href={treatment.href}
                          onClick={closeServicesMenu}
                          className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-teal-50 hover:text-teal-700"
                        >
                          <span>{treatment.shortTitle}</span>
                          <ArrowRight
                            className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                            aria-hidden="true"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Tratamientos secundarios */}
                  <div className="border-t border-gray-100 pt-4">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Otros tratamientos frecuentes
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {secondaryTreatments.map((treatment) => (
                        <Link
                          key={treatment.id}
                          href={treatment.href}
                          onClick={closeServicesMenu}
                          className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600 transition-colors hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
                        >
                          {treatment.shortTitle}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resto nav desktop */}
            {navItems
              .filter((item) => item.label !== "Inicio")
              .map(({ label, href, sectionId }) => {
                const isActive = isHome && activeSection === sectionId;

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeServicesMenu}
                    className={cn(
                      "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-teal-50 text-teal-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-teal-600"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}

                    {isActive && (
                      <span
                        className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 rounded-full bg-teal-500"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
          </nav>

          {/* Teléfono desktop/tablet */}
          <a
            href={`tel:${clinic.contact.phone}`}
            onClick={() => trackPhoneCall("header")}
            className="hidden min-h-[40px] shrink-0 items-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-teal-700 hover:shadow-md active:bg-teal-800 sm:flex"
            aria-label={`Llamar: ${clinic.contact.phoneDisplay}`}
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {clinic.contact.phoneDisplay}
          </a>

          {/* Mobile: teléfono + hamburguesa */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={`tel:${clinic.contact.phone}`}
              onClick={() => trackPhoneCall("header_mobile")}
              className="flex min-h-[40px] items-center gap-1.5 rounded-full bg-teal-600 py-2 pl-3 pr-4 text-xs font-bold text-white transition-colors hover:bg-teal-700"
              aria-label={`Llamar: ${clinic.contact.phoneDisplay}`}
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {clinic.contact.phoneDisplay}
            </a>

            <button
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition-colors hover:bg-gray-50"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
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
            "relative max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-gray-100 bg-white px-4 pb-5 shadow-xl transition-all duration-300",
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          )}
          aria-label="Menú móvil"
        >
          <ul className="divide-y divide-gray-100">
            <li>
              <Link
                href="/"
                onClick={closeAllMenus}
                className="flex items-center py-4 text-base font-semibold text-gray-800 transition-colors hover:text-teal-600"
              >
                Inicio
              </Link>
            </li>

            <li>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((value) => !value)}
                className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-gray-800 transition-colors hover:text-teal-600"
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-menu"
              >
                Servicios
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    mobileServicesOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>

              <div
                id="mobile-services-menu"
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  mobileServicesOpen
                    ? "grid-rows-[1fr] pb-4"
                    : "grid-rows-[0fr] pb-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="space-y-2 rounded-2xl bg-gray-50 p-3">
                    <Link
                      href="/#servicios"
                      onClick={closeAllMenus}
                      className="block rounded-xl bg-white px-4 py-3 text-sm font-bold text-gray-900 shadow-sm"
                    >
                      Resumen de servicios
                    </Link>

                    <Link
                      href="/tratamientos"
                      onClick={closeAllMenus}
                      className="block rounded-xl bg-teal-600 px-4 py-3 text-sm font-bold text-white shadow-sm"
                    >
                      Todos los tratamientos
                    </Link>

                    <div className="pt-2">
                      <p className="px-2 pb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-gray-400">
                        Principales
                      </p>

                      <div className="space-y-1">
                        {primaryTreatments.map((treatment) => (
                          <Link
                            key={treatment.id}
                            href={treatment.href}
                            onClick={closeAllMenus}
                            className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-white hover:text-teal-700"
                          >
                            {treatment.shortTitle}
                            <ArrowRight
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {navItems
              .filter((item) => item.label !== "Inicio")
              .map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeAllMenus}
                    className="flex items-center py-4 text-base font-semibold text-gray-800 transition-colors hover:text-teal-600"
                  >
                    {label}
                  </Link>
                </li>
              ))}
          </ul>

          <a
            href={`tel:${clinic.contact.phone}`}
            onClick={() => {
              trackPhoneCall("mobile_menu");
              closeAllMenus();
            }}
            className="mt-4 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-teal-600 py-3.5 text-sm font-bold text-white transition-colors hover:bg-teal-700"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Llamar: {clinic.contact.phoneDisplay}
          </a>
        </nav>
      </div>
    </>
  );
}