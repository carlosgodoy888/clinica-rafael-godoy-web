export interface DoctorInfo {
  fullName: string;
  specialty: string;
  university: string;
  experience: string;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  email: string;
  address: Address;
  coordinates: Coordinates;
  mapsUrl: string;
}

export interface DayHours {
  morning: string;
  afternoon: string | null;
}

export interface ClinicHours {
  monday: DayHours;
  tuesday: DayHours;
  wednesday: DayHours;
  thursday: DayHours;
  friday: DayHours;
}

export interface ClinicInfo {
  name: string;
  doctor: DoctorInfo;
  contact: ContactInfo;
  hours: ClinicHours;
}
