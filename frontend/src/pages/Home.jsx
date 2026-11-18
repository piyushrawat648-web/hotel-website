import { Link } from "react-router-dom";
import { Wifi, CarFront, Utensils, Waves, ArrowRight } from "lucide-react";
import RoomCard from "../components/RoomCard";
import BookingForm from "../components/BookingForm";
import { rooms } from "../data";
const highlights = [
  [Wifi, "Free Wi-Fi"],
  [CarFront, "Free parking"],
  [Utensils, "Restaurant"],
  [Waves, "Swimming pool"],
];
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow">WELCOME TO HOTEL SUNSHINE</span>
          <h1>A comfortable stay, every time.</h1>
          <p>
            Relax in welcoming rooms, enjoy thoughtful service and feel right at
            home.
          </p>
          <Link className="btn" to="/rooms">
            Explore rooms <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">MAKE YOURSELF AT HOME</span>
          <h2>Everything you need for a pleasant stay</h2>
        </div>
        <div className="highlight-grid">
          {highlights.map(([Icon, label]) => (
            <div className="highlight" key={label}>
              <Icon />
              <b>{label}</b>
            </div>
          ))}
        </div>
      </section>
      <section className="section soft">
        <div className="section-heading">
          <span className="eyebrow">STAY WITH US</span>
          <h2>Our popular rooms</h2>
          <p>Find the right space for your trip.</p>
        </div>
        <div className="room-grid">
          {rooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
        <div className="center">
          <Link className="btn btn-outline" to="/rooms">
            View all rooms
          </Link>
        </div>
      </section>
      <section className="section booking-section">
        <BookingForm />
      </section>
    </>
  );
}
