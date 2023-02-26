import React from "react";

export default function Footer() {
  return (
    <>
      <main className="flex flex-row justify-around py-8 border-t-2 border-black font-gotham text-white bg-black font-RedHat">
        <div className="flex justify-center text-2xl md:text-5xl">
          Blend Media
        </div>
        <div className="font-bold">
          <div>This Project created on :</div>
          <div>24 February 2023 until 26 February 2023</div>
        </div>
      </main>
    </>
  );
}
