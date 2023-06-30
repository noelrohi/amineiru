import { animePromise } from "@/lib/promises";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { AnimeCard } from "./AnimeCard";

interface RecentReleaseProps {}

export async function RecentRelease({}: RecentReleaseProps) {
  const recentRelease = await animePromise.recentRelease();
  return (
    <ScrollArea>
      <div className="flex space-x-4 pb-4">
        {recentRelease?.results.map((anime) => (
          <AnimeCard
            anime={anime}
            key={anime.id}
            className="w-[250px]"
            aspectRatio="portrait"
            width={250}
            height={330}
          />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
