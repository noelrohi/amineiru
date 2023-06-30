import { EpisodeList } from "@/components/EpisodeList";
import { Icons } from "@/components/icons";
import { VidPlayer } from "@/components/player";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { animePromise } from "@/lib/promises";
import { notFound } from "next/navigation";

interface EpisodeProps {
  params: { series: string; episodeNumber: string };
}

export async function generateMetadata({ params }: EpisodeProps) {
  const { title, description } = await animePromise.animeInfo(params.series);
  return {
    title: `${title} - Episode ${params.episodeNumber}`,
    description,
  };
}

export async function generateStaticParams({ params }: EpisodeProps) {
  const { totalEpisodes } = await animePromise.animeInfo(params.series);
  const episodeList = Array.from(
    { length: totalEpisodes },
    (_, i) => `${i + 1}`
  );
  return episodeList;
}

export const runtime = "edge";

export default async function EpisodePage({ params }: EpisodeProps) {
  const { episodes } = await animePromise.animeInfo(params.series);
  const episodePath = params.episodeNumber.replace("-", ".");
  const episode = episodes.find((e) => e.number === parseFloat(episodePath));
  if (!episode) notFound();
  const episodeInfo = await animePromise.episode(episode.id);
  const url = episodeInfo.sources.find((s) => s.quality === "720p")?.url;
  return (
    <div className="grid lg:grid-cols-5 mt-2 min-h-screen">
      <EpisodeList
        className="hidden lg:block"
        episodes={episodes}
        currentEpisode={Number(episodePath)}
      />
      <div className="col-span-3">
        <AspectRatio ratio={16 / 9}>
          <VidPlayer url={url} />
        </AspectRatio>
      </div>
      <div className="hidden lg:block">trend here</div>
    </div>
  );
}
