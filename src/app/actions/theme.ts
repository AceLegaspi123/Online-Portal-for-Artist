"use server";
import { cookies } from "next/headers";

export async function setTheme(theme: "light" | "dark") {
  const cookieStore = await cookies();
  cookieStore.set("theme", theme, { path: "/" });
}

export async function getTheme() {
  const cookieStore = await cookies();
  return cookieStore.get("theme")?.value || "dark"; // Default to dark
}