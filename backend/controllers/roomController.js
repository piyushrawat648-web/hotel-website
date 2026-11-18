import Room from "../models/Room.js";

export async function getRooms(_req, res, next) {
  try {
    res.json({
      success: true,
      data: await Room.find().sort({ createdAt: -1 }),
    });
  } catch (e) {
    next(e);
  }
}
export async function getRoom(req, res, next) {
  try {
    const room = await Room.findById(req.params.id);
    if (!room)
      return res
        .status(404)
        .json({ success: false, message: "Room not found" });
    res.json({ success: true, data: room });
  } catch (e) {
    next(e);
  }
}
