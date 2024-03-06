import React from "react";

export default function MainPageContent({ children, bgColor, padding }) {
  return (
    <div
      className={` text-2xl ${bgColor ? bgColor : ""} ${
        padding ? padding : "p-10"
      } px-6 lg:px-40 xl:px-60`}
    >
      {children}
    </div>
  );
}
