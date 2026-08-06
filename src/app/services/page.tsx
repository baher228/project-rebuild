import type { Metadata } from "next";

import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior, exterior, upgrade, maintenance and project-management services for your home.",
};

const services = [
  {
    id: "interior-improvements",
    number: "01",
    title: "Interior Improvements",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    alt: "Light-filled, carefully finished living room",
    outcome: "We transform outdated homes into modern, functional living spaces.",
    description:
      "Everything that modernises the inside of your home — whether it's a single room or a complete refurbishment. Our team handles every trade so the finish is seamless.",
    services: [
      "Full house refurbishments",
      "Kitchen renovations",
      "Bathroom renovations",
      "Painting & decorating",
      "Flooring",
      "Tiling",
      "Carpentry & joinery",
      "Internal doors",
      "Built-in wardrobes",
      "Media walls",
      "Plastering",
      "Ceiling repairs",
      "Loft boarding",
      "Storage solutions",
    ],
    highlights: [
      ["£200–2k", "Small jobs"],
      ["£3–15k", "Room refurbs"],
      ["£20–100k+", "Whole house"],
    ],
  },
  {
    id: "exterior-improvements",
    number: "02",
    title: "Exterior Improvements",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&q=80",
    alt: "Lush garden prepared for outdoor living",
    outcome:
      "We create outdoor spaces built for entertaining, relaxing, and adding value to your home.",
    description:
      "Everything that improves kerb appeal and outdoor living — from a new driveway that transforms the front of your home to a garden designed for summer evenings.",
    services: [
      "Landscaping",
      "Patios",
      "Decking",
      "Artificial grass",
      "Turfing",
      "Garden redesign",
      "Fencing",
      "Gates",
      "Garden walls",
      "Driveways",
      "Resin driveways",
      "Block paving",
      "Exterior decorating",
      "Pressure washing",
      "Brick cleaning",
    ],
    highlights: [
      ["Spring", "Book early for summer"],
      ["Kerb appeal", "Adds resale value"],
    ],
  },
  {
    id: "property-upgrades",
    number: "03",
    title: "Property Upgrades",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
    alt: "A bright, practical home office",
    outcome:
      "We turn wasted space into rooms you'll use every day — and value you'll bank when you sell.",
    description:
      "Projects that make your home more functional and more valuable. These are investments rather than repairs — turning garages, lofts, and awkward corners into genuinely useful space.",
    services: [
      "Garage conversions",
      "Utility rooms",
      "Home offices",
      "Walk-in wardrobes",
      "Loft storage",
      "Insulation upgrades",
      "Fire doors",
      "Soundproofing",
      "Accessibility improvements",
    ],
    highlights: [
      ["High value", "Adds usable space"],
      ["Investment", "Not just a repair"],
    ],
  },
  {
    id: "repairs-maintenance",
    number: "04",
    title: "Repairs & Maintenance",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80",
    alt: "Tools prepared for home maintenance work",
    outcome:
      "We keep your property in perfect condition — and catch the small things before they become big ones.",
    description:
      "Keeping your home or rental in top condition. Ideal for landlords and busy owners who want one reliable number to call for everything from a leaking gutter to end-of-tenancy work.",
    services: [
      "Roof repairs",
      "Gutter replacement",
      "Fascia & soffit repairs",
      "Fence repairs",
      "General maintenance",
      "Landlord maintenance",
      "End-of-tenancy repairs",
      "Insurance repairs",
      "Damp repairs",
      "Brick repointing",
    ],
    highlights: [
      ["Landlords", "One number for everything"],
      ["Fast", "Responsive callouts"],
    ],
  },
  {
    id: "project-management",
    number: "05",
    title: "Full Project Management",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    alt: "Architectural plans and materials arranged for a project",
    outcome: "You get the finished home. We handle everything it takes to get there.",
    description:
      "On larger projects, the real value is convenience: dealing with one trusted contractor instead of coordinating several independent trades yourself. We take care of the entire process.",
    services: [
      "Planning",
      "Scheduling",
      "Material procurement",
      "Sourcing & managing trades",
      "Quality control",
      "Client communication",
      "Budget management",
      "Timeline management",
    ],
    highlights: [
      ["One contact", "Not five trades"],
      ["Stress-free", "We coordinate it all"],
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="what-we-do">
      <header className="what-we-do__hero">
        <div className="what-we-do__kicker">What we do</div>
        <h1 className="what-we-do__title">
          Everything your
          <br />
          home needs.
        </h1>
        <p className="what-we-do__intro">
          We&apos;ve organised everything we do into five simple areas. Whatever you&apos;re trying
          to achieve, it fits into one of them — and we manage all of it, start to finish.
        </p>
      </header>

      <div className="what-we-do__services">
        {services.map((service) => (
          <section className="what-we-do__service" aria-labelledby={service.id} key={service.id}>
            <div className="what-we-do__image-wrap">
              <img className="what-we-do__image" src={service.image} alt={service.alt} />
              <span className="what-we-do__image-label">
                {service.number} — {service.title}
              </span>
            </div>

            <div className="what-we-do__content">
              <p className="what-we-do__number">Pillar {service.number}</p>
              <h2 className="what-we-do__heading" id={service.id}>
                {service.title}
              </h2>
              <p className="what-we-do__outcome">{service.outcome}</p>
              <p className="what-we-do__description">{service.description}</p>
              <ul className="what-we-do__service-list" aria-label={`${service.title} services`}>
                {service.services.map((item) => (
                  <li className="what-we-do__chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
              <dl className="what-we-do__highlights">
                {service.highlights.map(([value, label]) => (
                  <div className="what-we-do__highlight" key={value}>
                    <dt>{value}</dt>
                    <dd>{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        ))}
      </div>

      <section className="what-we-do__cta" aria-labelledby="services-cta-title">
        <div>
          <p className="what-we-do__kicker">Not sure where to start?</p>
          <h2 className="what-we-do__title" id="services-cta-title">
            Tell us what you
            <br />
            have in mind.
          </h2>
          <p className="what-we-do__intro">
            Describe what you&apos;d like to achieve and we&apos;ll point you in the right direction
            — with a free, no-obligation quote.
          </p>
        </div>
        <EnquiryForm
          buttonLabel="Get my free quote"
          fields={[
            { name: "name", placeholder: "Your name" },
            { name: "phone", type: "tel", placeholder: "Phone number" },
            { name: "email", type: "email", placeholder: "Email address", full: true },
            {
              name: "service",
              placeholder: "What would you like to improve?",
              full: true,
              options: [
                "Interior — kitchen, bathroom, refurbishment",
                "Exterior — garden, driveway, patio",
                "Property upgrade — conversion, office",
                "Repairs & maintenance",
                "A larger project — not sure where to start",
              ],
            },
            { name: "message", placeholder: "Tell us a little about the project", textarea: true },
          ]}
        />
      </section>
    </main>
  );
}
