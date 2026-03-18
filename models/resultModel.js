import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
  title: String,
  link: String,
  desc: String,
  keywords: [String],
});

export default mongoose.model("Result", ResultSchema);
