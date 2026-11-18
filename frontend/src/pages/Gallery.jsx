import PageHero from "../components/PageHero";
import { gallery } from "../data";
export default function Gallery() {
  return (
    <>
      <PageHero
        title="Photo gallery"
        subtitle="A glimpse of the spaces and experiences waiting for you."
        image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">TAKE A LOOK AROUND</span>
          <h2>Moments at our hotel</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map(([title, category, image]) => (
            <figure key={title}>
              <img src={image} alt={title} />
              <figcaption>
                <b>{title}</b>
                <span>{category}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
