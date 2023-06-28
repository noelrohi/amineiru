import { EpisodeList } from "@/components/EpisodeList";
import { Icons } from "@/components/icons";
import { VidPlayer } from "@/components/player";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { animePromise } from "@/lib/promises";
import { notFound } from "next/navigation";

export default async function EpisodePage({
  params,
}: {
  params: { series: string; episodeNumber: string };
}) {
  const { episodes } = await animePromise.animeInfo(params.series);
  const episodePath = params.episodeNumber.replace("-", ".");
  const episode = episodes.find(
    (e) => e.number === parseFloat(episodePath)
  );
  if (!episode) notFound();
  const episodeInfo = await animePromise.episode(episode.id);
  const url = episodeInfo.sources.find((s) => s.quality === "720p")?.url;
  return (
    <div className="grid lg:grid-cols-5 mt-2 min-h-screen">
      <EpisodeList className="hidden lg:block" episodes={episodes} currentEpisode={Number(episodePath)}/>
      <div className="col-span-3">
        <AspectRatio ratio={16 / 9}>
          <VidPlayer url={url} />
        </AspectRatio>
      </div>
      <div className="hidden lg:block">trend here</div>
    </div>
  );
}
