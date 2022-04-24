import React from "react";
import { Link } from "react-router-dom";
import AnimatePage from "../components/AnimatePage";
import "../styles/Home.css";

function Home() {
  return (
    <AnimatePage>
      <div className="h-screen w-screen flex flex-col justify-center items-center transition-opacity">
        <div className="splash-text-backdrop border-4 flex justify-center items-center rounded transition duration-600 ease-in-out py-2 p-2 md:p-5">
          <Link
            to="main"
            className="splash-text animate-bounce hover:animate-none text-4xl md:text-7xl uppercase font-bold"
          >
            Enter
          </Link>
        </div>
      </div>
    </AnimatePage>
  );
}

export default Home;
