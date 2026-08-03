// import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// ১. URI বিদ্যমান আছে কিনা নিশ্চিত করা
const uri = process.env.ASS8_MONGO_URI;
if (!uri) {
  throw new Error("ASS8_MONGO_URI is missing in .env.local file");
}

const client = new MongoClient(uri);
const db = client.db("assignment8-nextjs-project");

export const auth = betterAuth({
  // অরিজিন অনুমোদন দেওয়া (Local + Live Production)
  trustedOrigins: [
    "http://localhost:3000",
    "https://assignment8-auth-nextjs-project.vercel.app",
  ],

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  database: mongodbAdapter(db, {
    client,
  }),
});