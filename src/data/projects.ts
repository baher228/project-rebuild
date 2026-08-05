export type Project = {
  slug: string;
  name: string;
  service: string;
  location: string;
  year: number;
  summary: string;
  overview: string[];
  details: Array<[string, string]>;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "novorizhsky-residence",
    name: "Novorizhsky Residence Garden",
    service: "Private Garden Design",
    location: "Moscow",
    year: 2023,
    summary:
      "Minimalist landscape design featuring basalt rock accents, calm lawn panels and structured planting for a serene private estate.",
    overview: [
      "A restrained landscape for a modern private home. Long lawn panels, basalt rock gardens and structured planting create calm views from the house while keeping circulation simple and discreet.",
      "The garden combines durable hardscape, soft planting and carefully placed lighting to make the estate as usable after dusk as it is during the day.",
    ],
    details: [
      ["Location", "Moscow"],
      ["Completion", "2023"],
      ["Service", "Private Garden Design"],
      ["Project type", "Private residence"],
    ],
    images: [
      "/projects/novorizhsky-residence/1.jpg",
      "/projects/novorizhsky-residence/2.jpg",
      "/projects/novorizhsky-residence/3.jpg",
      "/projects/novorizhsky-residence/4.jpg",
    ],
  },
  {
    slug: "westfield-contemporary",
    name: "Westfield Contemporary Outdoor Living",
    service: "Outdoor Living Design",
    location: "Indiana",
    year: 2024,
    summary:
      "A sunset-facing courtyard with floating cedar benches, a monolithic fire table and drought-tolerant planting for year-round enjoyment.",
    overview: [
      "This outdoor living scheme turns the courtyard into an extension of the home, with generous places to gather, dine and relax as the light changes through the day.",
      "Cedar seating, a sculptural fire table and resilient planting balance a crisp contemporary setting with a relaxed, lived-in character.",
    ],
    details: [
      ["Location", "Indiana"],
      ["Completion", "2024"],
      ["Service", "Outdoor Living Design"],
      ["Project type", "Private residence"],
    ],
    images: [
      "/projects/westfield-contemporary/1.jpg",
      "/projects/westfield-contemporary/2.jpg",
      "/projects/westfield-contemporary/3.jpg",
      "/projects/westfield-contemporary/4.jpg",
    ],
  },
  {
    slug: "lakeside-outdoor-kitchen",
    name: "Lakeside Outdoor Kitchen & Fireplace",
    service: "Outdoor Kitchen & Fireplace",
    location: "Lake Country, Wisconsin",
    year: 2022,
    summary:
      "A fully equipped stone-and-steel cooking space with a modern brick fireplace, designed for seamless lakeside entertaining.",
    overview: [
      "A lakeside cooking and gathering space designed to move naturally from preparation to dining. Stone, steel and brick give the project a material character that is both durable and welcoming.",
      "The kitchen and fireplace create a focal point for entertaining, extending the season and linking the home directly to the water-facing landscape.",
    ],
    details: [
      ["Location", "Lake Country, Wisconsin"],
      ["Completion", "2022"],
      ["Service", "Outdoor Kitchen & Fireplace"],
      ["Project type", "Private residence"],
    ],
    images: [
      "/projects/lakeside-outdoor-kitchen/1.png",
      "/projects/lakeside-outdoor-kitchen/2.png",
      "/projects/lakeside-outdoor-kitchen/3.png",
      "/projects/lakeside-outdoor-kitchen/4.png",
    ],
  },
  {
    slug: "razdory-estate-gardens",
    name: "Razdory 2–3 Estate Gardens",
    service: "Estate Garden Design",
    location: "Moscow",
    year: 2023,
    summary:
      "Elegant formal gardens frame a classical estate with sculpted evergreens, seasonal blooms and precisely edged lawns.",
    overview: [
      "A formal garden for a classical estate, planned around symmetry, axial views and a veranda-to-garden connection. Granite paving and clipped planting establish a timeless, composed setting.",
      "Evergreen structure gives the garden a strong year-round framework, while flowering borders soften the geometry with seasonal colour and texture.",
    ],
    details: [
      ["Location", "Moscow"],
      ["Completion", "2023"],
      ["Service", "Estate Garden Design"],
      ["Project type", "Private estate"],
    ],
    images: [
      "/projects/razdory-estate-gardens/1.jpg",
      "/projects/razdory-estate-gardens/2.jpg",
      "/projects/razdory-estate-gardens/3.jpg",
      "/projects/razdory-estate-gardens/4.jpg",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
