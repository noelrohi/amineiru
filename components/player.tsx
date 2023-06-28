"use client";

import ReactPlayer from "react-player";

export function VidPlayer({ url }: { url: string | undefined }) {
  if (!url) return null;
  return (
    <div className="object-cover">
      <ReactPlayer url={url} controls={true} width={"100%"} height={"100%"} />
    </div>
  );
}
