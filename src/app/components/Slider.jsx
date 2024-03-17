"use client";
import Parser from "rss-parser";

import Image from "next/image";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export async function getPodcasts() {
  const rssParser = new Parser();
  const res = await rssParser.parseURL(
    "https://anchor.fm/s/f16d2b0c/podcast/rss"
  );
  return res;
}

export default async function Slider() {
  const rssParser = new Parser();

  const { items: podcasts } = await getPodcasts();
  console.log(podcasts);
  return (
    <div>
      <h1>Slider</h1>
      <motion.div className="carousel">
        <motion.div className="inner-carousel">
          {podcasts.map((podcast, ind) => {
            // string date to JS date is formatted
            const podcastDate = format(
              new Date(podcast.pubDate),
              "MMMM, dd, yyyy"
            );

            return (
              <motion.div
                key={ind}
                drag="x"
                dragConstraints={{ right: 0 }}
                className="flex p-4 flex-col max-w-sm rounded-lg items-center cursor-grab active:cursor-grabbing"
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
                    <h2 className="underline my-2  text-center">
                      {podcast.title}
                    </h2>
                  </a>
                  <p className=" text-gray-400 my-2 text-center">
                    {podcastDate}
                  </p>
                  <audio
                    className="my-4 mx-auto self-center text-center"
                    controls
                  >
                    <source src={podcast.enclosure.url} type="audio/x-m4a" />
                    Your browser does not support the audio element. Please
                    click the link above to navigate to the podcast page.
                  </audio>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <motion.h1 animate={{ x: 250 }}>HEy its me</motion.h1>
    </div>
  );
}
