import React from "react";
import Parser from "rss-parser";

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
export default async function Podcasts() {
  const { items: podcasts } = await getPodcasts();

  return (
    <div className="text-xl underline text-center ">
      <h1>Podcasts</h1>

      <div className="flex  justify-center items-center">
        {" "}
        {podcasts.map((podcast, ind) => {
          return (
            <div
              key={ind}
              className="flex-col justify-center items-center sm:items-stretch sm:flex-row flex border-2 my-4  p-4 rounded "
            >
              <a href={podcast.link}>
                <img
                  src={podcast.itunes.image}
                  className="max-w-44 mx-4"
                  alt="Robot internals and a microphone with the words 'What is it Really?'"
                />
              </a>
              <a href={podcast.link}>
                <h2>{podcast.title}</h2>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
