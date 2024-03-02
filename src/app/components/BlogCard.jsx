import Link from "next/link";

export default function BlogCard({ title, description, link }) {
  return (
    <div className=" ">
      <h2 className="text-xl my-2 ">{title}</h2>
      <p className="text-lg my-4 ">{description}</p>
      <Link href={link}>
        <button className="text-lg mb-4 border bg-white text-black p-3 hover:text-white hover:bg-black active:bg-gray-400 active:text-gray-500 transition-colors duration-200">
          {" "}
          Read more
        </button>
      </Link>
      <hr />
    </div>
  );
}
