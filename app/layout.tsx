import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = { title: "FlowPilot — Know what you can safely spend", description: "Cash-flow clarity for independent businesses." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><ClerkProvider dynamic>{children}</ClerkProvider></body></html>;
}
