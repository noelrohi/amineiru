import { Icons } from "./icons";

export function LoadingFallback() {
  return (
    <div className="flex items-center text-sm text-muted-foreground">
      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      Loading...
    </div>
  );
}
