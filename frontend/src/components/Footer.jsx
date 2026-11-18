import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>Hotel Sunshine</h3>
          <p>
            Comfort, care and warm hospitality. Make every stay a happy memory.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <Link to="/about">About us</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/facilities">Facilities</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            <Phone size={15} /> +91 98765 43210
          </p>
          <p>
            <Mail size={15} /> info@hotelsunshine.com
          </p>
          <p>
            <MapPin size={15} /> Agra, Uttar Pradesh, India
          </p>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Hotel Sunshine. All rights reserved.
      </div>
    </footer>
  );
}
