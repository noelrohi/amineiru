import { VidPlayer } from "@/components/player";
import { animePromise } from "@/lib/promises";
import { notFound } from 'next/navigation'
import React from "react";

export default async function EpisodePage({
  params,
}: {
  params: { series: string; episode: string };
}) {
  const { episodes } = await animePromise.animeInfo(params.series);
  const episode = episodes.find((e) => e.number === parseInt(params.episode));
  if (!episode) notFound()
  const episodeInfo = await animePromise.episode(episode.id);
  return (
    <div className="flex flex-col items-center justify-center min-h-[50ch]">
      {/* <h1>
        Episode {JSON.stringify(episodeInfo)} of {params.series}
      </h1> */}
      <VidPlayer url={episodeInfo.sources.find((s) => s.quality === '720p')?.url}/>
    </div>
  );
}
