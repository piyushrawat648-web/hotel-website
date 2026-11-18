import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: { type: String, default: "Hotel Sunshine" },
  tagline: { type: String, default: "Comfort, care and warm hospitality." },
  description: { type: String, default: "" },
  phone: { type: String, default: "+91 98765 43210" },
  email: { type: String, default: "info@hotelsunshine.com" },
  address: { type: String, default: "123 Hotel Street, Agra, Uttar Pradesh, India" },
  facilities: [{ type: String }]
}, { timestamps: true });

export default mongoose.model("Hotel", hotelSchema);
