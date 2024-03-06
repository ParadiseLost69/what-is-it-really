import React from "react";
import Parser from "rss-parser";
import Image from "next/image";
import { format } from "date-fns";
import Title from "../components/Title";

export const metadata = {
  title: "Podcasts | What is it Really?",
  description: "a podcast",
};
export async function getPodcasts() {
  const rssParser = new Parser();
  const res = await rssParser.parseURL(
    "https://anchor.fm/s/f16d2b0c/podcast/rss"
  );
  return res;
}
export default async function Episodes() {
  const { items: podcasts } = await getPodcasts();
  return (
    <div className="text-center">
      <Title>
        Episode <span className="text-secondary">Archive</span>
      </Title>

      <div className="flex justify-center items-center">
        {" "}
        {podcasts.map((podcast, ind) => {
          // string date to JS date is formatted
          const podcastDate = format(
            new Date(podcast.pubDate),
            "MMMM, dd, yyyy"
          );

          return (
            <div
              key={ind}
              className="flex-col justify-center items-center sm:items-stretch sm:flex-row flex my-8 p-8 rounded-3xl"
              style={{
                backgroundImage:
                  "linear-gradient(to top left, rgb(0,32,64,0.8), rgb(0, 40, 90, 0.8),  rgba(189, 189, 189, 0.8))",
              }}
            >
              <a target="_blank" href={podcast.link}>
                <Image
                  height={150}
                  width={150}
                  src={podcast.itunes.image}
                  className="mx-4"
                  alt="Robot internals and a microphone with the words 'What is it Really?'"
                />
              </a>
              <div>
                {" "}
                <a target="_blank" href={podcast.link}>
                  <h2 className="underline my-2  self-start text-left">
                    {podcast.title}
                  </h2>
                </a>
                <p className=" text-gray-400 my-2 text-left">{podcastDate}</p>
                <audio className="my-4 mx-auto self-center text-left" controls>
                  <source src={podcast.enclosure.url} type="audio/x-m4a" />
                  Your browser does not support the audio element. Please click
                  the link above to navigate to the podcast page.
                </audio>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
