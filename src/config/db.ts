import mongoose from "mongoose";

export const db = async () => {
  try {
    await mongoose.connect(process.env.DBURL || "");
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
};
