"use client";

import ReactPlayer from "react-player";

export function VidPlayer({ url }: { url: string | undefined }) {
  if (!url) return null;
  return <ReactPlayer url={url} />;
}
