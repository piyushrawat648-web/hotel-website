import { useState } from "react";
import api from "../services/api";
export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  async function submit(e) {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const { data } = await api.post("/contact", form);
      setStatus(data.message);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus(
        err.response?.data?.message ||
          "Message could not be sent. Please try again.",
      );
    }
  }
  return (
    <form className="form-card" onSubmit={submit}>
      <h2>Send us a message</h2>
      <label>
        Your name
        <input name="name" value={form.name} onChange={change} required />
      </label>
      <label>
        Email address
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={change}
          required
        />
      </label>
      <label>
        Subject
        <input name="subject" value={form.subject} onChange={change} />
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={change}
          required
        />
      </label>
      <button className="btn" type="submit">
        Send message
      </button>
      {status && (
        <p className="form-message" role="status">
          {status}
        </p>
      )}
    </form>
  );
}
