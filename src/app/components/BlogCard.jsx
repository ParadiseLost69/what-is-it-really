import Link from "next/link";
import Image from "next/image";
import WhiteButton from "./WhiteButton";

export default function BlogCard({ title, description, link, imageSrc }) {
  return (
    <div className=" ">
      <div className="inline-flex flex-col items-center m-20 ">
        <Image
          src={imageSrc}
          width={200}
          height={200}
          className="w-full rounded-t-3xl md:rounded-3xl "
          style={{ maxWidth: "400px" }}
        />{" "}
        <h2
          className=" text-black p-5 text-md mt-0 md:-mt-10 md:text-xl md:ml-60 mx-auto  text-center rounded-b-3xl md:rounded-3xl bg-white"
          style={{
            boxSizing: "border-box",
          }}
        >
          {" "}
          {title}
        </h2>
        <div className="md:ml-60 my-4">
          <p>{description}</p>
          <WhiteButton href={link}>Learn More</WhiteButton>
        </div>
      </div>
    </div>
  );
}
