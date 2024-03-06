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
      {/*BLOG CONTAINER */}
      <div className="flex flex-col xl:grid xl:grid-cols-2 ">
        <BlogCard
          title={"HTML and how Nuclear Research led to the Web"}
          description={
            "Have you ever wondered about how HTML really works? What is really happening when you write a <p> tag? Who created HTML and why?"
          }
          link={"/blog/html-and-how-nuclear-research-led-to-the-web"}
          imageSrc={"/img/HTML.webp"}
        />
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
