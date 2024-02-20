import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row h-12 w-full bg-gray-400 items-center px-10">
      <img className="" src="/vite.svg" />
      <div className="flex flex-row h-12 w-full items-center  gap-4  justify-end">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>
      </div>
    </div>
  );
}

export default Navbar;
