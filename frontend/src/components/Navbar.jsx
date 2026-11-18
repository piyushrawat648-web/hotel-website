import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, BedDouble } from "lucide-react";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Rooms", "/rooms"],
  ["Gallery", "/gallery"],
  ["Facilities", "/facilities"],
  ["Contact", "/contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <Link className="brand" to="/" onClick={() => setOpen(false)}>
        <BedDouble size={25} />{" "}
        <span>
          Hotel <b>Sunshine</b>
        </span>
      </Link>
      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <Link
          className="btn nav-book"
          to="/rooms"
          onClick={() => setOpen(false)}
        >
          Book Now
        </Link>
      </nav>
    </header>
  );
}
