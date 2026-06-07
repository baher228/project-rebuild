import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal",
  description: "Writing from the Ardivia studio: design thinking, materials, heritage, and the craft of building enduring architecture.",
};

const articles = [
  { img: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1400&q=80", cat: "Design thinking", title: "Why the relationship between architect and client defines everything about a project's outcome", date: "12 March 2025" },
  { img: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=900&q=80", cat: "Materials", title: "The quiet resurgence of polished plaster in modern British homes", date: "28 Feb 2025" },
  { img: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=900&q=80", cat: "Heritage", title: "Listed building renovations: balancing conservation with contemporary living", date: "14 Jan 2025" },
  { img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80", cat: "Craft", title: "The case for bespoke joinery: why we still build cabinetry by hand", date: "08 Dec 2024" },
  { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80", cat: "Studio", title: "Notes from the Highgate Residence - a year of patient design", date: "21 Nov 2024" },
  { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80", cat: "Commercial", title: "Spatial intelligence: how a workplace can carry brand without ever shouting", date: "02 Oct 2024" },
];

export default function JournalPage() {
  return (
    <main>
      <section className="section-pad bg-forest" style={{ paddingTop: 180 }}>
        <div className="section-eyebrow reveal">From the studio</div>
        <h1 className="section-title reveal d1" style={{ fontSize: "clamp(44px,5vw,72px)", color: "var(--linen)", marginBottom: 24, lineHeight: 0.96 }}>
          Journal.
        </h1>
        <p className="reveal d2" style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "rgba(232,226,213,.6)", lineHeight: 1.75, maxWidth: 620 }}>
          Long-form writing on design, materials and craft - drawn from the projects we work on and the people we work with.
        </p>
      </section>

      <section className="journal" style={{ paddingTop: 0 }}>
        <div className="journal-grid">
          {articles.map((article, index) => (
            <Link href="/journal" key={article.title} className={`journal-card reveal${index % 3 ? ` d${index % 3}` : ""}`}>
              <img className="journal-card-img" src={article.img} alt="" />
              <div className="journal-card-body">
                <div className="journal-cat">{article.cat}</div>
                <div className="journal-title-card">{article.title}</div>
                <div className="journal-date">{article.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
