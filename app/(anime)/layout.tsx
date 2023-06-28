import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/site-header";
import { currentUser } from "@clerk/nextjs";
import { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

async function layout({ children }: layoutProps) {
  const user = await currentUser();
  return (
    <div className="container relative">
      <SiteHeader user={user} />
      <main className="overflow-hidden bg-background shadow">{children}</main>
      <SiteFooter />
    </div>
  );
}

export default layout;
