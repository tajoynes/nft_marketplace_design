import React from "react";
import AnimatePage from "../components/AnimatePage";
import pc from "../images/3dpc.jpg";
import "../styles/Create.css";

function Create() {
  return (
    <AnimatePage>
      <div className="contentwrapper">
        <h1 className="text-xl font-mono font-bold text-slate-100 py-1">
          Create A Collectible
        </h1>
        <div className="grid grid-flow-row md:grid-cols-2 gap-5 p-2">
          <div className="card rounded drop-shadow-lg border bg-slate-100 p-8 ">
            <img src={pc} className="rounded h-full w-full" />
          </div>

          <div className=" card flex flex-col gap-2 rounded drop-shadow-lg border bg-slate-100 p-5">
            <h1>Name:</h1>
            <input
              type="text"
              placeholder="Item name"
              className="text-slate-500 font-mono text-lg rounded px-1"
            ></input>

            <h1>Description:</h1>
            <textarea
              type="text"
              rows="8"
              placeholder="Write a detailed description of your item"
              className="text-slate-500 rounded font-mono text-lg"
            ></textarea>

            <h1>Item #:</h1>
            <input
              type="number"
              placeholder="Item #"
              className="text-slate-500 font-mono text-lg"
            ></input>

            <h1>Price:</h1>
            <input
              type="number"
              placeholder="ETH"
              className="text-slate-500 font-mono text-lg"
            ></input>
            <div className="pt-4 text-center">
              <h1>Creator Address</h1>
              <p className="text-slate-500 font-mono text-lg break-words">
                0xe9fmao0449fmvid042mgfm03
              </p>
            </div>
          </div>
        </div>
        <button className="createbtn bg-stone-100 hover:bg-opacity-40 hover:bg-slate-900 hover:border-slate-800  bg-opacity-25 px-6 py-1 rounded border-2 text-lg md:text-2xl text-slate-100">
          Submit to Gallery
        </button>
      </div>
    </AnimatePage>
  );
}

export default Create;
