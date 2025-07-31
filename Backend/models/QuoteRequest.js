import mongoose from "mongoose";

const quoteRequestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true },
  phone: String,
  company: String,
  enquiryType: String,
  comments: String
}, { timestamps: true });

export default mongoose.model("QuoteRequest", quoteRequestSchema);
