"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";

//Google Analytics

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  <link rel="icon" href="/favicon.png" sizes="any" />;

  const pathName = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center min-h-screen px-4">
          {/*NAV MENU FOR SMALL SCREEN */}
          <nav className="sm:hidden block w-full px-4 py-8">
            <RxHamburgerMenu
              onClick={toggleMenu}
              className={`z-30 text-4xl transition-all relative hover:cursor-pointer ${
                isOpen ? "rotate" : ""
              }`}
            />
            <ul
              className={`flex flex-col z-20 bg-black p-6  ${
                isOpen ? "absolute top-0 left-0 w-full active-nav" : "hidden"
              }`}
            >
              <Link className="pt-20" onClick={toggleMenu} href="/">
                <li className="p-10 text-center hover:bg-primary active:bg-primary rounded-lg">
                  Home
                </li>
              </Link>
              <Link onClick={toggleMenu} href="/episodes">
                <li className="p-10 text-center hover:bg-primary active:bg-primary rounded-lg">
                  Episodes
                </li>
              </Link>
              <Link href="/about" onClick={toggleMenu}>
                <li className="p-10 text-center hover:bg-primary active:bg-primary rounded-lg">
                  About
                </li>
              </Link>
              <Link className="mb-4" href="/blog" onClick={toggleMenu}>
                <li className="p-10 text-center hover:bg-primary active:bg-primary rounded-lg">
                  Blog
                </li>
              </Link>
            </ul>
          </nav>
          {/*NAV MENU FOR LARGE SCREEN */}
          <nav className="w-full  hidden sm:block sm:flex sm:justify-between px-4">
            <Link href="/">
              {" "}
              <Image
                className="py-4"
                src="/img/logo__what-is-it-really.png"
                height={60}
                width={150}
                alt="What is it Really logo"
              />
            </Link>
            <ul className="flex justify-end sm:gap-20 lg:gap-40 px-6 py-8">
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
                  href="/episodes"
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
          <main className="flex-grow">{children}</main>

          {/* Footer that stays at the bottom */}
          <footer className="w-screen py-4">
            <p className="text-center p-6 bg-black">
              © What is it Really? 2024
            </p>
          </footer>
        </div>
      </body>
      <GoogleAnalytics gaId="G-2RJFQJY05W" />
    </html>
  );
}
