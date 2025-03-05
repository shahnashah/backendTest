import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://shahanashah9630:GU3V3EJHacczCSed@cluster0.tju8z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/sun");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

export default connectDB;
