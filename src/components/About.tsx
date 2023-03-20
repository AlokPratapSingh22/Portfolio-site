import { motion } from "framer-motion";
import { Chakra_Petch } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../sanity";
import { Experience, PageInfo } from "../../typings";
import ExperienceCard from "./ExperienceCard";

const chakra_petch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "500"],
});

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
};
function About({ pageInfo, experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full max-w-[1152px] pb-32 mx-auto px-4 mb-40 relative z-10 "
    >
      <div className="tabs-container w-full flex flex-row justify-start items-start">
        <div className="nav-wrap md:w-12 md:h-[480px] sticky md:top-[calc(50%-540px)] md:-mt-5 mb-10 w-8 h-[518px] flex flex-col justify-between top-[42px] mt-[42px]">
          <div className="navs">
            <div className="nav-e">
              <Link href="#about" className="active">
                About Me
              </Link>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="content mt-30 ">
          <div className="w-full">
            <div className="head flex flex-row justify-between items-start">
              <div className="mr-4">
                <span
                  className={`${chakra_petch.className} my-0 pb-0 border-b font-medium text-sm leading-6 relative w-max`}
                >
                  A Developer who,{" "}
                </span>
                <h1 className="font-extrabold text-3xl md:text-6xl md:leading-[72px] mt-5 relative ellipse">
                  {" Builds what"}
                  <br />
                  {"looks great..."}
                  <Image
                    src="/ellipse.svg"
                    alt="Ellipse"
                    className="top-0 absolute -left-4"
                    height={79}
                    width={212}
                  />
                  <svg
                    _ngcontent-sxy-c11=""
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -top-3 -right-4"
                  >
                    <path
                      _ngcontent-sxy-c11=""
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27 13.5C22.5347 13.5 19.227 12.1588 17.0341 9.9659C14.8412 7.77298 13.5 4.46532 13.5 0C13.5 4.46532 12.1588 7.77298 9.9659 9.9659C7.77298 12.1588 4.46532 13.5 1.31724e-06 13.5C4.46532 13.5 7.77298 14.8412 9.9659 17.0341C12.1588 19.227 13.5 22.5347 13.5 27C13.5 22.5347 14.8412 19.227 17.0341 17.0341C19.227 14.8412 22.5347 13.5 27 13.5Z"
                      fill="white"
                    ></path>
                  </svg>
                </h1>
                <div className="mt-6">
                  <span
                    className={`${chakra_petch.className} font-medium text-sm leading-6`}
                  >
                    Because if the looks does not impress you{" "}
                    <br className="block md:hidden" />
                    what else can?
                  </span>
                </div>
              </div>
            </div>

            <div className="self flex flex-col md:flex-row justify-start items-start w-full mt-6 md:mt-12">
              <div className="image border-white border-2 h-[257px] max-w-full md:max-w-[280px] md:h-[320px] w-full">
                <Image
                  src={urlFor(pageInfo?.profilePic).url()}
                  alt="My Pic"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="me-content md:pl-12 border-t-2 border-t-white w-full">
                <h2 className="font-extrabold text-3xl md:text-[40px] mt-7 leading-[48px] relative">
                  {"Namaskar! "}
                  <br className="block xl:hidden" />
                  {"I'm "}
                  <span className=" hover:text-fuchsia-300 hover:transition-colors">
                    {pageInfo.name}
                  </span>
                </h2>
                <p className="mt-6 text-xs leading-4 md:text-sm md:leading-6 font-medium max-w-full md:max-w-md w-full">
                  {pageInfo.backgroundInformation}
                </p>
                <Link href="#contact" className={chakra_petch.className}>
                  {"Let's Connect"}
                </Link>
              </div>
            </div>

            <div className="experiences mt-14">
              <div className="head flex flex-row justify-between items-center ">
                <div className="ring-head mr-4 relative">
                  <h2 className="font-extrabold text-2xl md:text-5xl">
                    Work Experience
                    <svg
                      _ngcontent-fee-c11=""
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute -top-2 -right-6"
                    >
                      <path
                        _ngcontent-fee-c11=""
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27 13.5C22.5347 13.5 19.227 12.1588 17.0341 9.9659C14.8412 7.77298 13.5 4.46532 13.5 0C13.5 4.46532 12.1588 7.77298 9.9659 9.9659C7.77298 12.1588 4.46532 13.5 1.31724e-06 13.5C4.46532 13.5 7.77298 14.8412 9.9659 17.0341C12.1588 19.227 13.5 22.5347 13.5 27C13.5 22.5347 14.8412 19.227 17.0341 17.0341C19.227 14.8412 22.5347 13.5 27 13.5Z"
                        fill="yellow"
                      ></path>
                    </svg>
                  </h2>
                  <div className="ring"></div>
                  <div className="ring-behind"></div>
                </div>
                <Image
                  src="/building-block.svg"
                  alt="bb"
                  className="hidden md:block text-inherit"
                  width={81}
                  height={88}
                />
              </div>
              <div className="experience-content inline-grid grid-cols-1 md:grid-cols-2 p-0 box-border w-full mt-12 border border-white border-r-0 border-b-0">
                {experiences.map((experience) => (
                  <ExperienceCard
                    key={experience._id}
                    experience={experience}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
