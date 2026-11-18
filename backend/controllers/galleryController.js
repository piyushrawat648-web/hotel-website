import Gallery from "../models/Gallery.js";

export async function getGallery(_req, res, next) {
  try {
    res.json({
      success: true,
      data: await Gallery.find().sort({ createdAt: -1 }),
    });
  } catch (e) {
    next(e);
  }
}
