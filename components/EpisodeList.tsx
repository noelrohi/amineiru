"use client";

import { Icons } from "@/components/icons";
import { useScrollIntoView } from "@mantine/hooks"
import { useDebounce } from "@/hooks/use-debounce";
import { cn, episodeSlug } from "@/lib/utils";
import { Episode } from "@/types";
import Link from "next/link";
import { startTransition, useEffect, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

interface EpisodeListProps {
  episodes: Episode[];
  className: string;
  currentEpisode: number;
}

export function EpisodeList({
  episodes,
  className,
  currentEpisode,
}: EpisodeListProps) {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >({ axis: "x" });
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1000);
  const [filteredEps, setFilteredEps] = useState<Episode[]>(episodes);
  useEffect(() => {
    scrollIntoView();
  }, [scrollIntoView]);
  useEffect(() => {
    if (debouncedQuery === "") {
      setFilteredEps(episodes);
    }
    startTransition(() => {
      const filtered = episodes.find(
        (e) => e.number === Number(debouncedQuery)
      );
      if (filtered) setFilteredEps([filtered]);
    });
  }, [debouncedQuery, episodes]);

  return (
    <Command>
      <CommandInput placeholder="Search episode" onValueChange={setQuery} />
      <div className={cn("border", className)}>
        <ScrollArea className="h-96" ref={scrollableRef}>
          <CommandEmpty>No episode found.</CommandEmpty>
          <CommandGroup className="p-4">
            {filteredEps.map((e) => (
              <Link
                href={`${episodeSlug(e.number)}`}
                className={cn("flex justify-between items-center gap-8 px-1")}
                key={e.number}
              >
                <CommandItem
                  ref={currentEpisode === e.number ? targetRef : undefined}
                  key={e.number}
                  className={cn(
                    currentEpisode === e.number && "bg-blue-500 rounded-md"
                  )}
                >
                  <p>Episode {e.number}</p>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>

          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    </Command>
  );
}
