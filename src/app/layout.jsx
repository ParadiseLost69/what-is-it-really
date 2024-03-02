import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center min-h-screen px-4">
          <nav className="w-full max-w-screen-2xl">
            <ul className="flex justify-between px-6 py-8">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/podcast">Podcasts</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
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
