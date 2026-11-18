import { useState } from "react";
import api from "../services/api";
export default function BookingForm({ selectedRoom = "" }) {
  const [form, setForm] = useState({
    guestName: "",
    email: "",
    phone: "",
    roomName: selectedRoom,
    checkIn: "",
    checkOut: "",
    guests: 1,
  });
  const [message, setMessage] = useState("");
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  async function submit(e) {
    e.preventDefault();
    setMessage("Sending request...");
    try {
      const { data } = await api.post("/bookings", form);
      setMessage(data.message);
      setForm({
        guestName: "",
        email: "",
        phone: "",
        roomName: selectedRoom,
        checkIn: "",
        checkOut: "",
        guests: 1,
      });
    } catch (err) {
      setMessage(
        err.response?.data?.message ||
          "Could not send booking request. Please try again.",
      );
    }
  }
  return (
    <form className="form-card" onSubmit={submit}>
      <h2>Request a booking</h2>
      <div className="form-grid">
        <label>
          Full name
          <input
            name="guestName"
            value={form.guestName}
            onChange={change}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={change}
            required
          />
        </label>
        <label>
          Phone
          <input name="phone" value={form.phone} onChange={change} required />
        </label>
        <label>
          Room
          <select
            name="roomName"
            value={form.roomName}
            onChange={change}
            required
          >
            <option value="">Choose a room</option>
            <option>Standard Room</option>
            <option>Deluxe Room</option>
            <option>Suite Room</option>
          </select>
        </label>
        <label>
          Check-in
          <input
            type="date"
            name="checkIn"
            value={form.checkIn}
            onChange={change}
            min={new Date().toISOString().slice(0, 10)}
            required
          />
        </label>
        <label>
          Check-out
          <input
            type="date"
            name="checkOut"
            value={form.checkOut}
            onChange={change}
            min={form.checkIn || new Date().toISOString().slice(0, 10)}
            required
          />
        </label>
        <label>
          Guests
          <input
            type="number"
            name="guests"
            min="1"
            max="10"
            value={form.guests}
            onChange={change}
            required
          />
        </label>
      </div>
      <button className="btn" type="submit">
        Send booking request
      </button>
      {message && (
        <p className="form-message" role="status">
          {message}
        </p>
      )}
    </form>
  );
}
