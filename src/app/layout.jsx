"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center min-h-screen px-4">
          <nav className="w-full max-w-screen-2xl invisible sm:visible">
            <ul className="flex justify-between px-6 py-8">
              <li>
                <Link
                  href="/"
                  className={
                    pathName === "/" ? "underline underline-offset-8" : ""
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="episodes"
                  className={
                    pathName === "/episodes"
                      ? "underline underline-offset-8"
                      : ""
                  }
                >
                  Episodes
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathName === "/about" ? "underline underline-offset-8" : ""
                  }
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathName === "/blog" ? "underline underline-offset-8" : ""
                  }
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Main content area that grows to take available space, if necessary */}
          <main className="flex-grow w-full max-w-screen-2xl">{children}</main>

          {/* Footer that stays at the bottom */}
          <footer className="w-full max-w-screen-2xl py-4">
            <p className="text-center">© What is it Really? 2024</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
