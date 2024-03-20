import localFont from "next/font/local";
import "./globals.css";
import PhantomsProvider from "@/app/context/PhantomsContext";

const qanelas = localFont({
  src: [
    {
      path: "./fonts/Qanelas-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Qanelas-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-qanelas",
  fallback: ["system-ui", "arial"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${qanelas.className} overflow-hidden`}>
        <PhantomsProvider>{children}</PhantomsProvider>
      </body>
    </html>
  );
}
