import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lakshay Manchanda",
  description: "Full stack developer",
  icons: {
    icon: "/images/Lakshay Manchanda.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full">
      <body className={`${firaCode.className} bg-[#121212] text-white w-full`}>
        {children}
        <div
          id="cover"
          className="flex justify-center items-center
          text-4xl max-md:text-xl text-black font-bold"
        >
          Loading...
        </div>
        <Toaster />
      </body>
    </html>
  );
}
