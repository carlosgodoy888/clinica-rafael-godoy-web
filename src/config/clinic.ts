import type { ClinicInfo } from "@/types/clinic";

export const clinic: ClinicInfo = {
  name: "Clínica Dental Dr. Rafael Godoy",
  doctor: {
    fullName: "Dr. Rafael Godoy Pizarro",
    specialty: "Médico Estomatólogo",
    university: "Universidad de Montpellier",
    experience: "35 años",
  },
  contact: {
    phone: "+34957292969",
    phoneDisplay: "957 29 29 69",
    email: "info@clinicarafaelgodoy.es",
    address: {
      street: "Plaza de Andalucía, 3, Sur",
      city: "Córdoba",
      postalCode: "14009",
      country: "España",
    },
    coordinates: {
      lat: 37.87013,
      lng: -4.78119,
    },
    mapsUrl: "https://maps.app.goo.gl/kC8tagP8EjpJBEnP7",
  },
  hours: {
    monday:    { morning: "9:00-14:00", afternoon: "17:00-20:30" },
    tuesday:   { morning: "9:00-14:00", afternoon: "17:00-20:30" },
    wednesday: { morning: "9:00-14:00", afternoon: null },
    thursday:  { morning: "9:00-14:00", afternoon: "17:00-20:30" },
    friday:    { morning: "9:00-14:00", afternoon: null },
  },
};
