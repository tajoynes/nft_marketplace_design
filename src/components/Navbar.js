import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-transparent px-8 py-2 h-fit ">
      <div className="flex justify-end md:justify-between text-slate-100">
        <div className="hidden md:flex text-mono font-bold italic">
          <Link to="/">SCVNGR HUNT</Link>
        </div>
        <div className="flex gap-5">
          <Link to="main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-amber-500 hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
          <Link to="create">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-amber-500 hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </Link>
          <Link to="dashboard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-amber-500 hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
          <button className="hover:bg-amber-500 hover:outline-amber-200 hover:text-black hover:scale-110 hover:animate-pulse rounded font-mono outline outline-offset-1 outline-slate-100 text-slate-50 px-1">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
