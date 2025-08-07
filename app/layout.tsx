import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { childProps } from "@/types";
import { FC } from "react";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/shared/navbar";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "q13-shop",
  description: "A modern e-commerce platform",
  icons: {
    icon: "/cart1.png",
  },
};

const RootLayout: FC<childProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
      <Navbar/>
       <main className="container max-w-6xl mt-24">{children}</main>
    <Toaster/>
       {/* footer */}
      </body>
    </html>
  );
}
export default RootLayout;