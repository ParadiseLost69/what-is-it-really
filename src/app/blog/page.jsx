import React from "react";
import Title from "../components/Title";
import BlogCard from "../components/BlogCard";

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
      <BlogCard
        title="Introduction"
        description="Welcome to What is it Really?"
        link="#"
      ></BlogCard>
    </main>
  );
}
