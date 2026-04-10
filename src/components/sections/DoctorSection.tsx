"use client";

import Image from "next/image";
import { CheckCircle, Quote, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { Container } from "@/components/ui/Container";
import { trackPhoneCall } from "@/lib/analytics";

const highlights = [
  "Médico Estomatólogo, Universidad de Montpellier (Francia)",
  "Más de 35 años como dentista especialista en Córdoba",
  "Formación continua en los mejores centros europeos",
  "Tecnología 3D, microscopio clínico y cirugía láser",
];

const stats = [
  { value: "35+", label: "Años de experiencia" },
  { value: "5.000+", label: "Pacientes atendidos" },
  { value: "6", label: "Especialidades" },
];

export function DoctorSection() {
  return (
    <section
      id="doctor"
      aria-labelledby="doctor-heading"
      className="py-14 md:py-20 bg-gray-50"
    >
      <Container>

        {/* ── Tarjeta principal unificada ── */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden">

          {/* Bloque superior: foto izquierda | texto derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* ── Columna izquierda: foto + cita ── */}
            <div className="flex flex-col order-2 lg:order-1 border-b lg:border-b-0 lg:border-r border-gray-100">

              {/* Foto — ocupa el espacio disponible */}
              <div
                id="doctor-photo"
                className="relative w-full aspect-[3/4] lg:aspect-auto lg:flex-1 lg:min-h-[520px] bg-gradient-to-br from-teal-50 via-teal-100 to-teal-200 overflow-hidden"
                aria-label="Dr. Rafael Godoy Pizarro, dentista y estomatólogo especialista en Córdoba"
              >
                <Image
                  src="/images/doctor/rafael-godoy-v02.jpg"
                  alt="Dr. Rafael Godoy Pizarro, dentista y estomatólogo en Córdoba"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[50%_8%]"
                  priority
                />

                {/* Badge flotante — años */}
                <div
                  className="absolute bottom-4 right-4 bg-teal-600 text-white rounded-2xl px-4 py-3 shadow-lg text-center"
                  aria-label="35 años de experiencia"
                >
                  <p className="text-3xl font-bold leading-none">35</p>
                  <p className="text-[10px] font-semibold text-teal-100 uppercase tracking-wider mt-0.5 leading-tight">
                    años<br />Córdoba
                  </p>
                </div>

                {/* Badge flotante — universidad */}
                <div
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-white text-teal-700 rounded-xl px-3 py-2 shadow-md text-center"
                  aria-label="Formación Universidad de Montpellier"
                >
                  <p className="text-[10px] font-bold uppercase tracking-wide leading-tight">
                    Univ.<br />Montpellier
                  </p>
                </div>
              </div>

              {/* Cita — fijada en la zona inferior de la columna izquierda */}
              <blockquote className="relative p-6 bg-gray-50/60">
                <Quote
                  className="absolute top-5 left-5 w-6 h-6 text-teal-200"
                  aria-hidden="true"
                />
                <p className="text-gray-600 italic leading-relaxed text-sm pl-7">
                  "Cada paciente merece un tratamiento único. Mi compromiso es combinar
                  35 años de experiencia como dentista especialista con las técnicas más
                  avanzadas de Europa."
                </p>
                <footer className="mt-3 pl-7">
                  <cite className="not-italic text-sm font-bold text-teal-700">
                    — {clinic.doctor.fullName}
                  </cite>
                  <p className="text-xs text-gray-400 mt-0.5">{clinic.doctor.specialty}</p>
                </footer>
              </blockquote>
            </div>

            {/* ── Columna derecha: contenido ── */}
            <div className="flex flex-col justify-center p-8 lg:p-10 order-1 lg:order-2">

              {/* Badge pill */}
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-teal-100 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" aria-hidden="true" />
                El Doctor
                <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" aria-hidden="true" />
              </div>

              <h2
                id="doctor-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4"
              >
                Dr. Rafael Godoy,{" "}
                <span className="text-teal-600">Dentista Especialista en Córdoba</span>
              </h2>

              <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-7">
                Médico Estomatólogo y dentista con consulta en Córdoba desde 1991.
                Más de 35 años dedicados a la salud dental de las familias cordobesas,
                con formación de élite en la Universidad de Montpellier y actualización
                constante en los mejores centros de Europa.
              </p>

              {/* Lista de puntos clave — limpia, sin exceso */}
              <ul className="space-y-3 mb-8">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <CheckCircle
                      className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-gray-50 rounded-2xl border border-gray-100 p-3 text-center"
                  >
                    <p className="text-xl font-bold text-teal-600 leading-none">{value}</p>
                    <p className="text-[10px] text-gray-500 leading-tight mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Barra CTA inferior — ocupa todo el ancho de la card ── */}
          <div className="border-t border-gray-100 bg-teal-600 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-sm md:text-base leading-tight">
                ¿Quieres ser el próximo paciente satisfecho?
              </p>
              <p className="text-teal-200 text-xs mt-0.5">
                Llámanos y cuéntanos tu caso — sin compromiso.
              </p>
            </div>
            <a
              href={`tel:${clinic.contact.phone}`}
              onClick={() => trackPhoneCall("doctor_section")}
              className="flex-shrink-0 inline-flex items-center gap-2.5 bg-white hover:bg-teal-50 text-teal-700 font-bold text-base px-7 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 min-h-[48px]"
              aria-label={`Llamar y pedir cita: ${clinic.contact.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              Pedir cita: {clinic.contact.phoneDisplay}
            </a>
          </div>
        </div>

      </Container>
    </section>
  );
}
