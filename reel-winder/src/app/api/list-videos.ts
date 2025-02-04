// pages/api/list-videos.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { createBlobClient } from "@vercel/blob";

const blob = createBlobClient({
  token: process.env.BLOB_READ_WRITE_TOKEN!,
});

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    // List all blobs from your Vercel Blob storage
    const blobs: any[] = await blob.list();
    // Optional: filter only video files (adjust filtering as needed)
    const videos = blobs.filter(
      (item) =>
        item.url.endsWith(".mp4") || item.contentType?.startsWith("video/")
    );
    return res.status(200).json(videos);
  } catch (error) {
    console.error("Error listing videos:", error);
    return res.status(500).json({ error: "Error listing videos" });
  }
};

export default handler;
