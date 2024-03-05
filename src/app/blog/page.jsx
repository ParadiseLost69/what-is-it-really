import React from "react";
import Title from "../components/Title";
import BlogCard from "../components/BlogCard";
import Image from "next/image";
import WhiteButton from "../components/WhiteButton";

export const metadata = {
  title: "Blog | What is it Really?",
  description:
    "What is it Really? is a podcast dedicated to understanding the technology that shapes our lives.",
};
export default function Blog() {
  return (
    <main>
      <div className="text-center">
        <Title>Blog</Title>
      </div>
      <div className="flex flex-col xl:grid xl:grid-cols-2 ">
        <div className=" inline-flex flex-col items-center m-20 ">
          <Image
            src={"/img/motherboard.jpg"}
            width={200}
            height={200}
            className="w-full border rounded-t-3xl md:rounded-3xl "
            style={{ maxWidth: "400px" }}
          />{" "}
          <h2
            className=" text-white p-5 text-md mt-0 md:-mt-10 md:text-xl md:ml-60 mx-auto  text-center rounded-b-3xl md:rounded-3xl"
            style={{
              backgroundImage:
                "linear-gradient(to top left, rgb(0,32,64,0.99), rgb(0, 40, 90, 0.99),  rgba(189, 189, 189, 0.9))",
              boxSizing: "border-box",
            }}
          >
            HTML and how Nuclear Research led to the Web
          </h2>
          <div className="md:ml-60 my-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              beatae et, ducimus voluptatum perspiciatis, exercitationem,
              voluptates adipisci ad reprehenderit consequuntur repellat eum
              cum. Iure ducimus iste veniam officiis velit. Harum!
            </p>
            <WhiteButton>Learn More</WhiteButton>
          </div>
        </div>
        <div className="inline-flex flex-col items-center m-20 ">
          <Image
            src={"/img/motherboard.jpg"}
            width={200}
            height={200}
            className=" w-full border rounded-2xl"
            style={{ maxWidth: "400px" }}
          />{" "}
          <h2
            className=" bg-white text-black p-5 text-md mt-0 md:-mt-10 md:text-xl md:ml-60 mx-auto rounded-b md:rounded text-center "
            style={{ boxSizing: "border-box" }}
          >
            HTML and how Nuclear Research led to the Web
          </h2>
          <div className="md:ml-60 my-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              beatae et, ducimus voluptatum perspiciatis, exercitationem,
              voluptates adipisci ad reprehenderit consequuntur repellat eum
              cum. Iure ducimus iste veniam officiis velit. Harum!
            </p>
            <WhiteButton>Learn More</WhiteButton>
          </div>
        </div>
      </div>
      {/* <div className="flex">
        <div>
          <Image
            className="border absolute"
            src="/img/motherboard.jpg"
            width={400}
            height={400}
          />
          <h1 className="text-4xl relative top-48 left-10 bg-white text-black p-4">
            HTML and how Nuclear Reasearch led to the web
          </h1>
          <p className="relative top-60 left-10 max-w-screen-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            obcaecati ea recusandae maiores aut, officiis voluptates eum ut
            beatae quisquam odio! Tempora eligendi omnis ducimus ullam debitis
            ratione mollitia hic?
          </p>
          <button className="bg-black border py-4 px-2 relative top top-72 left-10">
            READ MORE
          </button>
        </div>
      </div> */}

      {/* <BlogCard
        title="Introduction"
        description="Welcome to What is it Really?"
        link="#"
      ></BlogCard> */}
    </main>
  );
}
