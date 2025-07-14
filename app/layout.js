import { Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

// ✅ Import and configure Space Mono
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // Available weights: 400 (regular), 700 (bold)
});

export const metadata = {
  title: "Rahul Maity – Portfolio",
  description: "Frontend-Obsessed Software Developer | Full Stack Capable",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} bg-[#dcdad9] text-black`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
