import { NextRequest, NextResponse } from "next/server";
import Mux from "@mux/mux-node";

const mux = new Mux(process.env.MUX_TOKEN_ID!, process.env.MUX_TOKEN_SECRET!);

export async function POST(req: NextRequest) {
  try {
    const upload = await mux.video.uploads.create({
      new_asset_settings: { playback_policy: ["public"] },
      cors_origin: "https://your-allowed-origin.com",
    });

    return NextResponse.json({ uploadUrl: upload.url });
  } catch (error) {
    console.error("Mux upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
