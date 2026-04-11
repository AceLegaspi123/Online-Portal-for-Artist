import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "@/lib/cloudinary";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { file } = req.body; // base64 string or file path
    const result = await cloudinary.uploader.upload(file, {
      folder: "artists_portal",
    });

    return res.status(200).json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
