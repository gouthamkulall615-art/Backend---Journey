import mongoose from "mongoose";
import config from "./config.js";

async function connectionDB() {
  await mongoose.connect(config.MONGO_URI);
  console.log("connected to DB");
}
export default connectionDB;
