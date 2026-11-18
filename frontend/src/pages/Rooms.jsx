import PageHero from "../components/PageHero";
import RoomCard from "../components/RoomCard";
import BookingForm from "../components/BookingForm";
import { rooms } from "../data";
import { useEffect, useState } from "react";
import api from "../services/api";
export default function Rooms() {
  const [items, setItems] = useState(rooms);
  useEffect(() => {
    api
      .get("/rooms")
      .then((r) => {
        if (r.data.data?.length) setItems(r.data.data);
      })
      .catch(() => {});
  }, []);
  return (
    <>
      <PageHero
        title="Rooms & suites"
        subtitle="Comfortable spaces for every kind of trip."
        image="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">CHOOSE YOUR ROOM</span>
          <h2>Rest easy at Hotel Sunshine</h2>
        </div>
        <div className="room-grid">
          {items.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      </section>
      <section className="section soft">
        <BookingForm />
      </section>
    </>
  );
}
