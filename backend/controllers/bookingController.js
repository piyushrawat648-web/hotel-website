import Booking from "../models/Booking.js";

export async function createBooking(req, res, next) {
  try {
    const {
      guestName,
      email,
      phone,
      room,
      roomName,
      checkIn,
      checkOut,
      guests,
    } = req.body;
    if (
      !guestName ||
      !email ||
      !phone ||
      !roomName ||
      !checkIn ||
      !checkOut ||
      !guests
    )
      return res
        .status(400)
        .json({
          success: false,
          message: "Please complete all required booking fields.",
        });
    const start = new Date(checkIn),
      end = new Date(checkOut);
    if (
      Number.isNaN(start.getTime()) ||
      Number.isNaN(end.getTime()) ||
      end <= start
    )
      return res
        .status(400)
        .json({ success: false, message: "Check-out must be after check-in." });
    const booking = await Booking.create({
      guestName,
      email,
      phone,
      room: room || undefined,
      roomName,
      checkIn: start,
      checkOut: end,
      guests,
    });
    res
      .status(201)
      .json({
        success: true,
        message:
          "Booking request received. The hotel will contact you to confirm.",
        data: booking,
      });
  } catch (e) {
    next(e);
  }
}
export async function getBooking(req, res, next) {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking)
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    res.json({ success: true, data: booking });
  } catch (e) {
    next(e);
  }
}
