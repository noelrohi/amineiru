import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { animePromise } from "@/lib/promises";
import { episodeSlug } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { series: string };
}) {
  const { description, title } = await animePromise.animeInfo(params.series);
  return {
    title,
    description,
  };
}

export async function generateStaticParams() {
  const { results: recentSeries } = await animePromise.recentRelease();
  const { results: topAiringSeries } = await animePromise.topAiring()
  const listOfRecentSeries = recentSeries.map((series) => {
    return series.id;
  });
  const listOfTopSeries = topAiringSeries.map((series) => {
    return series.id;
  });
  return [...listOfTopSeries, ...listOfRecentSeries];
}

export const runtime = "edge";

export default async function SeriesPage({
  params,
}: {
  params: { series: string };
}) {
  const {
    description,
    episodes,
    id,
    image,
    otherName,
    releaseDate,
    status,
    subOrDub,
    title,
    totalEpisodes,
    genres,
    type,
    url,
  } = await animePromise.animeInfo(params.series);
  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 p-4 lg:p-20">
      <div>
        <Image
          src={image}
          height={320}
          width={200}
          alt={title}
          className="aspect-[3/4]"
        />
        <div>
          <Badge className="bg-yellow-500 hover:bg-yellow-700 text-black">
            HD
          </Badge>
          <Badge variant={"secondary"}>{subOrDub}</Badge>
          <Badge>{totalEpisodes}</Badge>
        </div>
      </div>
      <div className="flex flex-col space-y-4 col-span-2 lg:col-span-3 px-4">
        <h1 className="text-3xl">{title}</h1>
        <p className="indent-8 text-xs lg:text-sm line-clamp-6 md:line-clamp-none">
          {description}
        </p>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href={`/anime/${id}/${episodeSlug(1)}`}>
              <Icons.tv className="mr-2 h-4 w-4" />
              Watch
            </Link>
          </Button>
          <Button>
            <Icons.add className="mr-2 h-4 w-4" />
            Add to list
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-4 text-sm lg:items-start lg:justify-start col-span-2 lg:col-span-1 lg:flex-col mt-4 lg:mt-0">
        <div>
          <b>Other Name(s):</b> {otherName}
        </div>
        <div>
          <b>Status:</b> {status}
        </div>
        <div>
          <b>Type:</b> {type}
        </div>
        <div>
          <b>Release Date:</b> {releaseDate}
        </div>
        <div>
          <b>Genres</b>
          <div>
            {genres.map((genre) => (
              <Badge key={genre} variant={"outline"}>
                {genre}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
