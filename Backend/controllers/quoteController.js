import QuoteRequest from "../models/QuoteRequest.js";

export const createQuoteRequest = async (req, res) => {
  try {
    const newQuote = await QuoteRequest.create(req.body);
    res.status(201).json(newQuote);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
};
