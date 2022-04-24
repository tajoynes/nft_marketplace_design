import React from "react";
import { Link } from "react-router-dom";
import AnimatePage from "../components/AnimatePage";
import car from "../images/3dcar.jpg";

function Gallery() {
  const data = [
    { Id: 1, Artist: "Unknown", Price: 5 },
    { Id: 2, Artist: "Unknown", Price: 5 },
    { Id: 3, Artist: "Unknown", Price: 5 },
    { Id: 4, Artist: "Unknown", Price: 5 },
    { Id: 5, Artist: "Unknown", Price: 5 },
    { Id: 6, Artist: "Unknown", Price: 5 },
    { Id: 7, Artist: "Unknown", Price: 5 },
    { Id: 8, Artist: "Unknown", Price: 5 },
    { Id: 9, Artist: "Unknown", Price: 5 },
    { Id: 10, Artist: "Unknown", Price: 5 },
    { Id: 11, Artist: "Unknown", Price: 5 },
    { Id: 12, Artist: "Unknown", Price: 5 },
  ];
  const listItems = data.map((data) => (
    <div
      key={data.Id}
      className="group h-fit w-max rounded drop-shadow-lg border bg-slate-100 p-1 hover:scale-105 transition duration-500 ease-in-out"
    >
      <img
        src={car}
        height={250}
        width={250}
        className="rounded group-hover:animate-pulse"
      />
      <div className="bg-stone-100 flex flex-row justify-between font-mono text-lg">
        <h1>{data.Artist}</h1>
        <h3>{data.Price} ETH</h3>
      </div>
    </div>
  ));
  return (
    <AnimatePage>
      <div className="">
        <h1 className="text-center font-extrabold font-mono text-5xl py-10 text-slate-200 uppercase">
          Gallery
        </h1>

        <div className="grid grid-flow-row justify-center gap-5 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {listItems}
          </div>
        </div>

        <div className="flex flex-row justify-center items-center text-center py-10">
          <div className="flex items-center gap-5 p-5 w-fit rounded drop-shadow-md bg-amber-500 border-0">
            <div className="flex flex-col gap-5">
              <p className="font-mono text-lg font-bold text-center uppercase">
                Get Your Work Displayed
              </p>
              <Link to="/create">
                <button className="createbtn bg-stone-100 hover:bg-opacity-40 hover:bg-slate-900 hover:border-slate-800  bg-opacity-25 px-6 py-1 rounded border-2 text-lg md:text-2xl text-slate-100">
                  Create Collectible
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatePage>
  );
}

export default Gallery;
