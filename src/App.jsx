import React from "react";
import Pic from "./assets/images/crop.png";

function App() {
  return (
    <div className="justify-center w-screen h-screen flex items-center bg-gray-200">
      <div className="p-5 flex flex-col rounded-lg w-[300px] h-[350px] bg-pink-300 shadow-black shadow-lg">
        <img
          src={Pic}
          alt="Crop"
          className="rounded-full self-center w-[150px] h-[150px]"
        />
        <label className="font-poppins-bold text-white">Email</label>
        <input
          type="email"
          className="bg-transparent border-2 rounded-lg"
        ></input>
        <label className="font-poppins-bold text-white">Password</label>
        <input
          type="password"
          className="bg-transparent border-2 rounded-lg"
        ></input>
        <button className="bg-yellow-600 font-poppins max-w-min self-center px-5 mt-5 justify-center h-12 rounded-lg bg-white">
          Submit
        </button>
        <div className="bg-blue flex flex-col rounded-xl "></div>
      </div>
    </div>
  );
}

export default App;
