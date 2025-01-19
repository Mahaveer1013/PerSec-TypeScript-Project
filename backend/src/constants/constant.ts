import { configDotenv } from "dotenv"
configDotenv();

export const MONGODB_URI = process.env.MONGODB_URI
console.log(MONGODB_URI);
