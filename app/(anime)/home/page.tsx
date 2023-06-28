import { AnimeCard } from "@/components/AnimeCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { animePromise } from "@/lib/promises";

export const revalidate = 15

export default async function Home() {
  const recentRelease = await animePromise.recentRelease();
  const topAiring = await animePromise.topAiring();
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Top Airing</h2>
          <p className="text-sm text-muted-foreground">
            Lately popular anime. Updated daily.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {topAiring?.results.map((anime) => (
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
      </div>
      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">
          Recent Release
        </h2>
        <p className="text-sm text-muted-foreground">
          Realtime episodes that got out recently
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {recentRelease.results.map((anime) => (
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
      </div>
    </main>
  );
}
