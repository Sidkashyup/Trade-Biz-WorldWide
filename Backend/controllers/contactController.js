import ContactMessage from "../models/ContactMessage.js";

export const createContactMessage = async (req, res) => {
  try {
    const message = await ContactMessage.create(req.body);
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
};
