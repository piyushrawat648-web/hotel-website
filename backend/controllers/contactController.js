import Contact from "../models/Contact.js";

export async function createContact(req, res, next) {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message)
      return res
        .status(400)
        .json({
          success: false,
          message: "Name, email and message are required.",
        });
    const contact = await Contact.create({ name, email, subject, message });
    res
      .status(201)
      .json({
        success: true,
        message: "Thanks! Your message has been sent.",
        data: contact,
      });
  } catch (e) {
    next(e);
  }
}
