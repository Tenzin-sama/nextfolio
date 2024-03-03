import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 gap-8 duration-200">
      <h1 className="text-5xl xl:text-7xl xl:leading-loose leading-normal font-bold font-serif bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 hover:text-transparent bg-clip-text bg-360% animate-gradient text-transparent md:text-black">
        Tenzin Tsering Shrestha
      </h1>
      <div className="flex flex-wrap absolute bottom-10 md:flex-row">
        <p className="text-base md:text-lg"> This site is currently being redesigned, but in the meantime,&nbsp;</p>
        <a
          className="flex gap-1 text-base justify-center items-center underline hover:bg-blue-200 duration-200 text-blue-500 md:text-lg"
          href="https://tenzintshrestha.com.np"
          target="_blank"
        >
          visit the previous portfolio page
          <ArrowUpRightIcon className="h-5 w-5 text-blue-500" />
        </a>
      </div>
      
    </main>
  );
}
