import { Inter } from "next/font/google";
import "./globals.css";
import MainNavigationHeader from "@/components/header/MainNavigationHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextNews",
  description: "Stay up to date with news from around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="page">
          <MainNavigationHeader />
        </div>
        {children}
      </body>
    </html>
  );
}
