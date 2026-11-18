import Hotel from "../models/Hotel.js";

const defaults = {
  name: "Hotel Sunshine",
  tagline: "Comfort, care and warm hospitality.",
  description:
    "A welcoming place to relax, recharge and enjoy thoughtful hospitality.",
  phone: "+91 98765 43210",
  email: "info@hotelsunshine.com",
  address: "123 Hotel Street, Agra, Uttar Pradesh, India",
  facilities: [
    "Free Wi-Fi",
    "Restaurant",
    "Free Parking",
    "Room Service",
    "Family Rooms",
    "24-hour Front Desk",
  ],
};

export async function getHotel(_req, res, next) {
  try {
    const hotel = await Hotel.findOne().sort({ createdAt: -1 });
    res.json({ success: true, data: hotel || defaults });
  } catch (e) {
    next(e);
  }
}
