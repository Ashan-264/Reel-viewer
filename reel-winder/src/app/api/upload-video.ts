// pages/api/upload-video.ts
import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { put } from "@vercel/blob";
import fs from "fs/promises";

// Disable Next.js's built-in body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const form = formidable({ multiples: false });
  form.parse(req, async (err, _fields, files) => {
    if (err) {
      console.error("Error parsing upload:", err);
      return res.status(500).json({ error: "Error processing file upload" });
    }

    const file = files.video;
    if (!file) {
      return res.status(400).json({ error: "No video file uploaded" });
    }
    const uploadedFile = Array.isArray(file) ? file[0] : file;

    try {
      // Read the uploaded file into a Buffer
      const data = await fs.readFile(uploadedFile.filepath);
      const contentType = uploadedFile.mimetype || "video/mp4";

      const imageBuffer = await response.arrayBuffer();

      const filename = `${crypto.randomUUID()}.jpg`;
      //const blob = await put('folder/file.txt', 'Hello World!', { access: 'public' });

      const blob = await put(`pentagram/${filename}`, imageBuffer, {
        access: "public",
        contentType: "image/jpeg",
      });
      // result.url contains the public URL of the uploaded video
      return res.status(200).json({ url: result.url });
    } catch (uploadErr) {
      console.error("Error uploading to Vercel Blob:", uploadErr);
      return res.status(500).json({ error: "Error uploading file" });
    }
  });
};

export default handler;
