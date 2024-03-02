import Image from "next/image";
import Title from "./components/Title";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <div className="flex flex-col m mt-30vh items-center">
        <h1 className="text-4xl sm:text-7xl" style={{ fontFamily: "Impact" }}>
          What is it{" "}
          <span className="text-secondary bold font-bold">Really</span>?
        </h1>
        <h2 className={inter + "text-xl sm:text-3xl"}>Technology Uncovered</h2>
      </div>
      <h1 className="mt-70vh text-4xl text-center mb-40">HEY</h1>
    </div>
  );
}
