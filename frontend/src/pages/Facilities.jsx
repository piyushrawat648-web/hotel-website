import PageHero from "../components/PageHero";
import { facilities } from "../data";
import * as Icons from "lucide-react";
export default function Facilities() {
  return (
    <>
      <PageHero
        title="Facilities & services"
        subtitle="Simple comforts and helpful services for a relaxed stay."
        image="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">THOUGHTFUL EXTRAS</span>
          <h2>Made for your comfort</h2>
          <p>Enjoy convenient amenities throughout your stay.</p>
        </div>
        <div className="facility-grid">
          {facilities.map(([icon, title, desc]) => {
            const Icon = Icons[icon] || Icons.Sparkles;
            return (
              <article className="facility-card" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
