import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../../sanity";
import { PageInfo } from "../../typings";
import BgCircles from "./BgCircles";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Namaste, This is ${pageInfo.name.split(" ")[0]}`,
      "Guy-who-codes.py",
      "<ButAlsoLovesFootball />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <div className="relative flex justify-center">
        <div className="absolute z-0 h-[400px] -mt-5 w-[400px]">
          <Image
            id="bg-img"
            src={urlFor(pageInfo?.backgroundImage).url()}
            alt="photo"
            width={400}
            height={400}
          />
        </div>
      </div>
      <BgCircles />
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Mine"
        className="relative rounded-full h-32 w-32 mx-auto object-cover z-20"
        width={200}
        height={200}
      />
      <div className="z-20">
        <h2 className="text-xs md:text-sm uppercase text-gray-300 opacity-90 pb-2 tracking-[8px] sm:tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h3 className="text-[10px] md:text-sm uppercase text-gray-400 pb-2 tracking-[4px] sm:tracking-[7px]">
          <span className="mr-10 lg:mr-32">Developer</span>
          <span className="ml-10 lg:ml-32">Designer</span>
        </h3>
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-white px-10 mx-auto">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>

      <div className="z-20 pt-5">
        <Link href="#about">
          <button className="heroBtn">About</button>
        </Link>
        <Link href="#skills">
          <button className="heroBtn">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroBtn">Projects</button>
        </Link>
        <Link href="#contact">
          <button className="heroBtn">Contact Me</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
