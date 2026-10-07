export interface LocationInfo {
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
}

export const locations: LocationInfo[] = [
  {
    name: "Portland Adoption Center",
    city: "Portland, OR",
    address: "2080 SE Alder Way, Portland, OR 97205",
    phone: "(503) 555-0144",
    hours: "Tue–Sun: 10:00 AM–5:30 PM",
    services: ["Adoptions", "Meet & Greets", "Wellness check-ins"],
  },
  {
    name: "Forest Grove Spay & Neuter Clinic",
    city: "Forest Grove, OR",
    address: "1085 Pacific Ave, Forest Grove, OR 97116",
    phone: "(503) 555-0178",
    hours: "Mon–Sat: 8:30 AM–4:30 PM",
    services: ["Low-cost care", "Vaccination clinics", "Community support"],
  },
  {
    name: "Seattle Community Hub",
    city: "Seattle, WA",
    address: "2314 Rainier Ave S, Seattle, WA 98144",
    phone: "(206) 555-0132",
    hours: "Wed–Sun: 11:00 AM–6:00 PM",
    services: ["Volunteer support", "Foster intake", "Behavior help"],
  },
  {
    name: "Bend Rescue & Recovery Center",
    city: "Bend, OR",
    address: "1089 NW Century Dr, Bend, OR 97703",
    phone: "(541) 555-0116",
    hours: "Tue–Sun: 9:00 AM–5:00 PM",
    services: ["Adoptions", "Microchipping", "Emergency transport"],
  },
];
