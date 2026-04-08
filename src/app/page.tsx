import { HeroSection }         from "@/components/sections/HeroSection";
import { CredentialsSection }  from "@/components/sections/CredentialsSection";
import { ServicesSection }     from "@/components/sections/ServicesSection";
import { WhyUsSection }        from "@/components/sections/WhyUsSection";
import { DoctorSection }       from "@/components/sections/DoctorSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection }      from "@/components/sections/ContactSection";
import { ScrollReveal }        from "@/components/ui/ScrollReveal";

export default function HomePage() {
  return (
    <>
      {/*
        Motor de animaciones de scroll.
        IMPORTANTE: los wrappers data-reveal se han eliminado de aquí para evitar
        que el transform/opacity inicial interfiera con la navegación por anclas.
        Las animaciones viven dentro de cada sección (cards individuales).
      */}
      <ScrollReveal />

      <HeroSection />
      <CredentialsSection />
      <ServicesSection />
      <WhyUsSection />
      <DoctorSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
