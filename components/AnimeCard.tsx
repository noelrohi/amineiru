import Image from "next/image";

import { cn, episodeSlug } from "@/lib/utils";
import { AnimeDetails } from "@/types";
import Link from "next/link";

interface AnimeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  anime: AnimeDetails & { episodeNumber?: number } & { episodeId?: string };
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function AnimeCard({
  anime,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: AnimeCardProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <Link href={`anime/${anime.id}/${episodeSlug(anime.episodeNumber ?? 1)}`}>
        <div className="overflow-hidden rounded-md">
          <Image
            src={anime.image}
            alt={anime.title}
            width={width}
            height={height}
            className={cn(
              "object-contain transition-all hover:scale-105",
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
            )}
          />
        </div>
      </Link>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{anime.title}</h3>
        {anime.episodeNumber && (
          <p className="text-xs text-muted-foreground">
            Episode {anime.episodeNumber}
          </p>
        )}
      </div>
    </div>
  );
}
