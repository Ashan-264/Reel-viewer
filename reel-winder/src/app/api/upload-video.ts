import { NextRequest, NextResponse } from "next/server";
import Mux from "@mux/mux-node";

const mux = new Mux(process.env.MUX_TOKEN_ID!, process.env.MUX_TOKEN_SECRET!);

export async function GET(req: NextRequest) {
  try {
    console.log(req.body);
    const assets = await mux.video.assets.list();
    const videos = assets.map((asset) => ({
      id: asset.id,
      playbackUrl: `https://stream.mux.com/${asset.playback_ids?.[0]?.id}.m3u8`,
    }));

    return NextResponse.json({ videos });
  } catch (error) {
    console.error("Error fetching videos:", error);
    return NextResponse.json(
      { error: "Failed to fetch videos" },
      { status: 500 }
    );
  }
}
