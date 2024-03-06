import Image from "next/image";
import { FaArrowAltCircleDown, FaArrowDown, FaSpotify } from "react-icons/fa";
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import MainPageContent from "./components/MainPage/MainPageContent";

const inter = Inter({ subsets: ["latin"], style: "normal" });

export const metadata = {
  title: "What is it Really?",
};
export default function Home() {
  return (
    <div>
      <div
        className="absolute left-0 -z-10 flex top-0 w-screen h-screen"
        style={{
          backgroundImage: "url('/img/motherboard.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* <Image src="/img/motherboard.jpg" width={1920} height={1080} /> */}
      </div>
      <div className="flex flex-col m mt-25vh items-center">
        <h1
          className="text-4xl sm:text-7xl main-title"
          style={{ fontFamily: "Impact" }}
        >
          What is it{" "}
          <span className="text-secondary bold font-bold">Really</span>?
        </h1>
        <h2
          className={
            inter.style.fontFamily +
            "my-2 sm:my-3 text-xl sm:text-4xl sub-title"
          }
        >
          Technology Uncovered
        </h2>
        <Link
          target="_blank"
          href="https://open.spotify.com/show/7sRuaXg3M3rR9k0UW975YC?si=3080792fef734436"
        >
          <button className="flex align-middle items-center fade-in-button my-10 text-lg sm:text-2xl border rounded-full p-2 sm:p-5 text-center self-center hover:bg-white hover:text-black transition-all hover:scale-105">
            <FaSpotify
              style={{ display: "inline" }}
              className="py-auto text-green-600"
            />
            {"  "}
            &nbsp;Listen on Spotify
          </button>
        </Link>
      </div>

      <div className="text-xl mx-1/2 flex justify-center animate-bounce my-20">
        <a href="#description">
          <FaArrowDown className="text-white opacity-50 text-4xl text-8xl" />
        </a>
      </div>
      <div className=" mt-40 bg-black width-screen " style={{ width: "100vw" }}>
        <h2
          id="description"
          className=" tracking-wide font-primary pt-4 text-center text-4xl"
        >
          Behind the <span className="text-secondary">Bytes</span>
        </h2>
        <MainPageContent>
          <p>
            From the humble beginnings of internet protocols to the latest in AI
            advancements, our team delves deep into the heart of technology,
            making the complex comprehensible. Join us as we explore the stories
            behind the tech that powers our daily lives, bringing you closer to
            the marvels of modern engineering and the brilliant minds that make
            it all possible.
          </p>
        </MainPageContent>

        <MainPageContent bgColor="bg-gray-700" padding="p-10">
          <h2 className="text-center">he dsdas kdskladlaksmm dmsklma</h2>
        </MainPageContent>
      </div>
    </div>
  );
}
