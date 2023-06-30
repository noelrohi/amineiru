import { type Metadata } from "next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verify Email",
  description: "Verify your email address to continue with your sign up",
};

export default function VerifyEmailPage() {
  return (
    <Shell layout="auth">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Checkout your mailbox</CardTitle>
          <CardDescription>
            Click the button to verify your email address
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button asChild>
            <Link href="https://mail.google.com/mail/u/0/#inbox">
              Check Inbox
            </Link>
          </Button>
        </CardContent>
      </Card>
    </Shell>
  );
}
