import React from "react";

export default function WhiteButton({ children, href }) {
  return (
    <>
      <a href={href}>
        {" "}
        <button className=" rounded-full bg-black border py-4 px-8 my-4 hover:bg-white hover:text-black transition-colors ">
          {children}
        </button>
      </a>
    </>
  );
}
