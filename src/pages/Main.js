import React from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
import car from "../images/3dcar.jpg";
import tent from "../images/3dtent.jpg";
import pc from "../images/3dpc.jpg";
import nintendo from "../images/3dnintendo.jpg";
import AnimatePage from "../components/AnimatePage";

function Main() {
  return (
    <AnimatePage>
      <div className="mainwrapper">
        <div className="flex flex-col gap-5">
          <div className="displayone h-fit rounded drop-shadow-md border-0">
            <img src={tent} className="imageone rounded relative" />
            <Link to="gallery">
              <button className="gallerybtn bg-stone-100 hover:bg-opacity-40 hover:bg-amber-500 hover:border-amber-500 bg-opacity-25 px-6 py-1 rounded absolute border-2 text-lg md:text-2xl text-slate-100">
                View Gallery
              </button>
            </Link>
          </div>
          <div className="displaytwo grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="h-fit rounded drop-shadow-lg border bg-slate-100 p-2 ">
              <img src={pc} className="imagetwo rounded" />
              <div className="bg-stone-100 flex flex-row justify-between font-mono text-lg">
                <h1>User Address</h1>
                <p>ETH</p>
              </div>
            </div>
            <div className="h-fit rounded drop-shadow-lg border bg-slate-100 p-2 ">
              <img src={nintendo} className="imagetwo rounded" />
              <div className="bg-stone-100 flex flex-row justify-between font-mono text-lg">
                <h1>User Address</h1>
                <p>ETH</p>
              </div>
            </div>
          </div>
          <div className="displaythree grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="h-fit rounded drop-shadow-lg border bg-slate-100 p-2 ">
              <img src={pc} className="imagetwo rounded" />
              <div className="bg-stone-100 flex flex-row justify-between font-mono text-lg">
                <h1>User Address</h1>
                <p>ETH</p>
              </div>
            </div>
            <div className="h-fit rounded drop-shadow-lg border bg-slate-100 p-2 ">
              <img src={nintendo} className="imagetwo rounded" />
              <div className="bg-stone-100 flex flex-row justify-between font-mono text-lg">
                <h1>User Address</h1>
                <p>ETH</p>
              </div>
            </div>
          </div>
          <div className="displayone h-fit rounded drop-shadow-md bg-amber-500 border-0 flex flex-col items-center justify-center p-6 gap-10">
            <p className="font-mono text-lg font-bold text-center">
              Discover extraordinary NFTs from Black Artist all over the world
            </p>
            <h1 className="text-3xl text-center font-extrabold font-mono uppercase underline underline-offset-2">
              Featured Artist
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="h-fit w-auto rounded drop-shadow-lg border bg-slate-100 p-2 ">
                <img src={car} height={300} width={300} />
                <div className="bg-stone-100 flex flex-row justify-between font-mono text-lg">
                  <h1>Artist:</h1>
                  <h3>Random Name</h3>
                </div>
              </div>
              <div className="h-fit rounded drop-shadow-lg border bg-slate-100 p-2 ">
                <img src={car} height={300} width={300} />
                <div className="bg-stone-100 flex flex-row justify-between font-mono text-lg">
                  <h1>Artist:</h1>
                  <h3>Random Name</h3>
                </div>
              </div>
              <div className="h-fit rounded drop-shadow-lg border bg-slate-100 p-2 ">
                <img src={car} height={300} width={300} />
                <div className="bg-stone-100 flex flex-row justify-between font-mono text-lg">
                  <h1>Artist:</h1>
                  <h3>Random Name</h3>
                </div>
              </div>
            </div>
            <Link to="/create">
              <button className="createbtn bg-stone-100 hover:bg-opacity-40 hover:bg-slate-900 hover:border-slate-800  bg-opacity-25 px-6 py-1 rounded border-2 text-lg md:text-2xl text-slate-100">
                Create Collectible
              </button>
            </Link>
          </div>
        </div>
      </div>
    </AnimatePage>
  );
}

export default Main;
