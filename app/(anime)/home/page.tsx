import { LoadingFallback } from "@/components/loader";
import { RecentRelease } from "@/components/recent-release";
import { TopAiring } from "@/components/top-airing";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { Suspense } from "react";

export const revalidate = 15;
export const runtime = "edge";

export const metadata: Metadata = {
  title: "Home",
  description: `Homepage of the ${siteConfig.name}`,
};

export default function Home() {
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
        <Suspense fallback={<LoadingFallback />}>
          <TopAiring />
        </Suspense>
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
        <Suspense fallback={<LoadingFallback />}>
          <RecentRelease />
        </Suspense>
      </div>
    </main>
  );
}
