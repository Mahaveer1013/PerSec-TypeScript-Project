import mongoose from "mongoose";

const connectDB = async () => {
  console.log(process.env.MONGODB_URI);
  await mongoose.connect(`${process.env.MONGODB_URI}`);
};
export default connectDB;