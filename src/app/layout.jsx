import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Yatun Khaijan",
//   description: "Best Resturant in Bangladesh",
// };

export const metadata = {
  title: {
    default: "Yatun Khaijan",
    template: "Yatun Khaijan | %s"
  },
  description: "Best Resturant in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="flex justify-between items-center bg-stone-800 h-20 px-8">
          <Link href="/">
            <img src="/next.svg" alt="" className="w-[120px]" />
          </Link>

          <div className="space-x-6">
            <Link className="btn-1" href={'/foods'}>Foods</Link >
            <Link className="btn-1" href={'/reviews'}>Reviews</Link >
            <Link className="btn-1" href={'/feedback'}>Feedbacks</Link >
          </div>
        </header>

        <main className="mt-10">
          <CartProvider>
            {children}
          </CartProvider>
        </main>
      </body>
    </html>
  );
}
