import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import CursorComp from "@/components/CursorComp";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillType from "@/components/Skills";

import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";

import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { GetStaticProps } from "next";
import { Chakra_Petch, Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

import { Header } from "./../components/Header";
const inter = Inter({ subsets: ["latin"] });
const chakra_petch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "500", "600"],
});

export default function Home({
  pageInfo,
  experiences,
  skills,
  socials,
  projects,
}: Props) {
  return (
    <div className="bg-[rgb(15,15,15)] no-scrollbar text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden m-0 p-0 z-0 border-0 scrollbar scrollbar-track scrollbar-track-gray-400/20 scrollbar-thumb-[#0fe3ff]/80">
      <div className="hidden md:block">
        <CursorComp />
      </div>
      <Head>
        <title>Alok Portfolio</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className={inter.className}>
        <Header socials={socials} />
        {/* Hero or Landing */}
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>

        <section id="about" className="snap-start">
          <About pageInfo={pageInfo} experiences={experiences} />
        </section>

        <section id="skills" className="snap-start">
          <SkillType skills={skills} />
        </section>

        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>

        <section id="contact" className="snap-start">
          <ContactMe />
        </section>

        <footer className="sticky bottom-5 z-20 flex flex-row justify-between items-center">
          <Link href="#hero">
            <div className="w-full cursor-pointer flex flex-row justify-center items-center">
              <div>
                <Image
                  src="/Me.png"
                  alt="ph"
                  height={40}
                  width={40}
                  className="ml-10 h-7 w-7 sm:w-10 sm:h-10 object-cover rounded-full filter grayscale hover:grayscale-0"
                />
              </div>
              <div>
                <ArrowUpIcon className="text-white w-5 sm:w-8" />
              </div>
            </div>
          </Link>
          <div className="h-[60px] sm:mb-3 w-[150px] sm:h-[80px] sm:w-[300px] md:max-h-[100px] flex flex-row">
            <div className="download">
              <Link
                href="/AlokCV.pdf"
                className={`${chakra_petch.className} font-bold text-[10px] leading-none sm:leading-[18px] sm:text-[14px] text-center`}
              >
                {"DOWNLOAD"}
                <br />
                {"RESUME"}
              </Link>
            </div>
            <div
              className={`${chakra_petch.className} mail flex flex-col items-start justify-center`}
            >
              <p className="font-semibold text-[10px] leading-none sm:text-[14px] sm:leading-[18px] tracking-wide text-[#171717] bg-[#f2fd31] py-1 px-[6px] w-max uppercase">
                caution
              </p>
              <Link
                href=""
                className="font-semibold text-[10px] leading-none sm:text-[14px] sm:leading-[18px] sm:w-[170px] tracking-tighter sm:tracking-wide text-[#171717] bg-[#fff] cursor-default py-1 px-[6px] "
              >
                ©️ alokpsingh22 2023
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      experiences,
      pageInfo,
      skills,
      projects,
      socials,
    },

    revalidate: 10,
  };
};
