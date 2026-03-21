// app/api/users/route.ts
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("Fetching users from MongoDB...");
  try {
    const client = await clientPromise;
    const db = client.db("myDatabase");

    const users = await db
      .collection("users")
      .find({})
      .limit(10)
      .toArray();

    return NextResponse.json(users);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}