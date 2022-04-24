import React from "react";

function Dashboard() {
  const purchases = [];
  const listing = [];
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="text-3xl font-mono font-extrabold text-slate-200 underline underline-offset-4 uppercase">
        Dashboard{" "}
      </h1>
      <div className="h-fit rounded drop-shadow-lg border bg-slate-100 p-2 text-center">
        <h1>Account</h1>
        <p className="text-slate-500 font-mono text-lg break-words">
          0xe9fmao0449fmvid042mgfm03
        </p>
      </div>
      <div className="grid grid-flow-col gap-5">
        <div className="h-fit rounded drop-shadow-lg border bg-slate-100 p-2 text-center ">
          <h1>Purchases</h1>
          {purchases.length <= 0 ? (
            <div className="group h-full w-full rounded drop-shadow-lg border bg-slate-100 p-1">
              <div>
                <p>Currently no Items to display</p>
              </div>
            </div>
          ) : (
            <div
              key={purchases.Id}
              className="group rounded drop-shadow-lg border bg-slate-100 p-1 hover:scale-105 transition duration-500 ease-in-out"
            >
              <div className="bg-stone-100 flex flex-row justify-between font-mono text-lg">
                <h1>{purchases.Artist}</h1>
                <h3>{purchases.Price} ETH</h3>
              </div>
            </div>
          )}
        </div>
        <div className="h-fit rounded drop-shadow-lg border bg-slate-100 p-2 ">
          <h1>Listings</h1>
          {listing.length <= 0 ? (
            <div className="group h-full w-full rounded drop-shadow-lg border bg-slate-100 p-1">
              <div>
                <p>Currently no Items to display</p>
              </div>
            </div>
          ) : (
            <div
              key={listing.Id}
              className="group rounded drop-shadow-lg border bg-slate-100 p-1 hover:scale-105 transition duration-500 ease-in-out"
            >
              <div className="bg-stone-100 flex flex-row justify-between font-mono text-lg">
                <h1>{listing.Artist}</h1>
                <h3>{listing.Price} ETH</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
