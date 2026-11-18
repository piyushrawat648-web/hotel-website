import PageHero from "../components/PageHero";
export default function About() {
  return (
    <>
      <PageHero
        title="About our hotel"
        subtitle="A warm welcome and a restful place to stay."
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="section split">
        <img
          className="split-image"
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1100&q=85"
          alt="Hotel lobby"
        />
        <div>
          <span className="eyebrow">OUR STORY</span>
          <h2>Hospitality with a personal touch</h2>
          <p>
            At Hotel Sunshine, we believe a good stay is about more than a room.
            It is about friendly service, clean and comfortable spaces, and the
            little details that help you feel at ease.
          </p>
          <p>
            Whether you are visiting for work, a family holiday or a quick
            getaway, our team is here to make your visit pleasant.
          </p>
          <Link className="btn" to="/rooms">
            Discover our rooms
          </Link>
        </div>
      </section>
    </>
  );
}
import { Link } from "react-router-dom";
