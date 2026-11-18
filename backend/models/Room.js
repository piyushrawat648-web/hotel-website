import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  price: { type: Number, required: true, min: 0 },
  image: { type: String, default: "" },
  capacity: { type: Number, default: 2 },
  amenities: [{ type: String }],
  featured: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Room", roomSchema);
