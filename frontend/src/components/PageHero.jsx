export default function PageHero({ title, subtitle, image }) {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `linear-gradient(90deg,rgba(7,26,54,.72),rgba(7,26,54,.12)),url(${image})`,
      }}
    >
      <div>
        <span className="eyebrow">HOTEL SUNSHINE</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
