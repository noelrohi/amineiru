import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/site-header";
import { currentUser } from "@clerk/nextjs";
import React, { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

async function layout({ children }: layoutProps) {
  const user = await currentUser();
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default layout;
