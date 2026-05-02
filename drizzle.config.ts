import { defineConfig } from "drizzle-kit";
import path from "path";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

function buildConnectionUrl(url: string): string {
  if (process.env.NODE_ENV !== "production") return url;
  const u = new URL(url);
  u.searchParams.set("sslmode", "verify-full");
  return u.toString();
}

export default defineConfig({
  schema: path.join(__dirname, "./src/schema/index.ts"),
  dialect: "postgresql",
  dbCredentials: {
    url: buildConnectionUrl(process.env.DATABASE_URL),
  },
});
