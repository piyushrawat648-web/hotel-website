import { Link } from "react-router-dom";
import { Users } from "lucide-react";
export default function RoomCard({ room }) {
  return (
    <article className="room-card">
      <img src={room.image} alt={room.name} />
      <div className="room-content">
        <h3>{room.name}</h3>
        <p>{room.description}</p>
        <div className="room-meta">
          <span>
            <Users size={15} /> Up to {room.capacity || 2} guests
          </span>
          <strong>
            ₹{Number(room.price).toLocaleString("en-IN")} <small>/ night</small>
          </strong>
        </div>
        <Link
          className="btn"
          to={`/contact?room=${encodeURIComponent(room.name)}`}
        >
          Enquire now
        </Link>
      </div>
    </article>
  );
}
