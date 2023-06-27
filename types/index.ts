type Source = {
  url: string;
  isM3U8: boolean;
  quality: "360p" | "480p" | "720p" | "1080p" | "default" | "backup";
};

export type EpisodeLinks = {
  headers: {
    Referer: string;
  };
  sources: Source[];
  download: string;
};

type Episode = {
  id: string;
  number: number;
  url: string;
};

type AnimeDetails = {
  id: string;
  title: string;
  image: string;
  url: string;
  genres: string[];
};

export type Info = AnimeDetails & {
  subOrDub: "sub" | "dub";
  description: string | null;
  releaseDate: string | null;
  type: string;
  status: "Ongoing" | "Completed" | "Cancelled" | "Upcoming";
  otherName: string;
  totalEpisodes: number;
  episodes: Episode[];
};

export type AiringAnime = {
  currentPage: string;
  hasNextPage: boolean;
  results: AnimeDetails[];
};

export type RecentRelease = {
  currentPage: string;
  hasNextPage: boolean;
  results: {
    id: string;
    title: string;
    image: string;
    url: string;
    episodeId: string;
    episodeNumber: number;
  }[];
};

export type SearchedAnime = {
  currentPage: string;
  hasNextPage: boolean;
  results: {
    id: string;
    title: string;
    url: string;
    image: string;
    releaseDate: string;
    subOrDub: "dub" | "sub";
  }[];
};
