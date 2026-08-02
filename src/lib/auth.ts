import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.ASS8_MONGO_URI);
const db = client.db('assignment8-nextjs-project');

const trustedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://assignment8-auth-nextjs-project.vercel.app",
  process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
  process.env.BETTER_AUTH_URL,
].filter(Boolean) as string[];

export const auth = betterAuth({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
  trustedOrigins,
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
});