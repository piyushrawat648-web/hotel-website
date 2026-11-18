import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";
export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact us"
        subtitle="We would be happy to help you plan your stay."
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="section contact-layout">
        <div>
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>We are here to help</h2>
          <p>
            Contact our team for room enquiries, booking requests or any
            questions.
          </p>
          <div className="contact-line">
            <Phone />{" "}
            <span>
              <b>Phone</b>
              <br />
              +91 98765 43210
            </span>
          </div>
          <div className="contact-line">
            <Mail />{" "}
            <span>
              <b>Email</b>
              <br />
              info@hotelsunshine.com
            </span>
          </div>
          <div className="contact-line">
            <MapPin />{" "}
            <span>
              <b>Address</b>
              <br />
              Agra, Uttar Pradesh, India
            </span>
          </div>
          <div className="map-placeholder">Hotel Sunshine · Agra, India</div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
