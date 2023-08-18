import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ali Ashraf Next Library",
  description: "Next JS Practice Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Link href={"/"}>Home</Link> */}
        {children}
      </body>
    </html>
  );
}
