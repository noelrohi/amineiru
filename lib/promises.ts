import { absoluteUrl } from "@/lib/utils";
import { AiringAnime, EpisodeLinks, Info, RecentRelease, SearchedAnime } from "@/types";

export const animePromise = {
  topAiring: async (): Promise<AiringAnime> => {
    return fetch(absoluteUrl("/api/anime/top-airing")).then((res) =>
      res.json()
    );
  },
  recentRelease: async (): Promise<RecentRelease> => {
    return fetch(absoluteUrl("/api/anime/recent")).then((res) => res.json());
  },
  animeInfo: async (id: string): Promise<Info> => {
    return fetch(absoluteUrl(`/api/anime/${id}`)).then((res) => res.json());
  },
  episode: async (id: string): Promise<EpisodeLinks> => {
    return fetch(absoluteUrl(`/api/anime/episode/${id}`)).then((res) =>
      res.json()
    );
  },
  search: async (query: string): Promise<SearchedAnime> => {
    return fetch(absoluteUrl(`/api/anime/search?query=${query}`)).then((res) =>
      res.json()
    );
  },
};
