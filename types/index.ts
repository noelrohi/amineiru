export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  description: string
  url: string
  links: {
    twitter: string
    github: string
  }
  mainNav: {
    title: string,
    href: string
  }[]
}

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

export type Episode = {
  id: string;
  number: number;
  url: string;
};

export type AnimeDetails = {
  id: string;
  title: string;
  image: string;
  url: string;
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
  genres: string[];
};

export interface RecentReleaseResult extends AnimeDetails {
  episodeId: string;
  episodeNumber: number;
}
export type RecentRelease = {
  currentPage: string;
  hasNextPage: boolean;
  results: RecentReleaseResult[];
};

interface SearchedAnimeResult extends AnimeDetails {
  releaseDate: string;
  subOrDub: "dub" | "sub";
}

export type SearchedAnime = {
  currentPage: string;
  hasNextPage: boolean;
  results: SearchedAnimeResult[];
};
