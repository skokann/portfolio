import React from "react";
import Socials from "./Socials";

export default function Home() {
  return (
    <main className="font-outfit text-5xl bg-white flex w-full h-screen flex-col justify-center items-center tracking-tight p-10">
      <span className="font-bold">
        Hi Im Jiri Zubryckyj, <br />a{" "}
        <strong className="text-[#3FC5FE]">developer</strong> currently working{" "}
        <br />
        at @
        <strong className="underline">
          <a href="https://www.blackfish.co" className="">
            blackfish
          </a>
        </strong>{" "}
        in Prague. <Socials />
      </span>
    </main>
  );
}
