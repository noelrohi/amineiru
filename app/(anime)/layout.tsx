import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

function layout({ children }: layoutProps) {
  return (
    <div className="container relative">
      <SiteHeader />
      <main className="overflow-hidden bg-background shadow">{children}</main>
      <SiteFooter />
    </div>
  );
}

export default layout;
