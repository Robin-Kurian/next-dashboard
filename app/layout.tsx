import "@/app/ui/global.css";
import { lusitana } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Evrz",
    default: "Evrz",
  },
  description: "The official Evrz Dashboard, built with Next.js.",
  metadataBase: new URL("https://evrz.in"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
