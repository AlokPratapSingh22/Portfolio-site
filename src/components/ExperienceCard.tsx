import { Chakra_Petch } from "next/font/google";
import Link from "next/link";
import { Experience } from "../../typings";

const chakra_petch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "500"],
});

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  const dateEnded = experience.isCurrentlyWorkingHere
    ? "Present"
    : new Date(experience.dateEnded).toDateString();
  return (
    <article>
      <Link href={`${experience.companyUrl}`} className="experience-card">
        <div className="top">
          <div>
            <h3>{experience?.jobTitle}</h3>
            <span>{experience.company}</span>
          </div>
          <span className={chakra_petch.className}>{"//Remote"}</span>
        </div>
        <div className="bottom">
          <span>
            {new Date(experience.dateStarted).toDateString()} - {dateEnded}
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              _ngcontent-gwb-c11=""
              d="M0 0V3.42864H3.42862V0H0Z"
              fill="white"
              fill-opacity="0.4"
            ></path>
            <path
              _ngcontent-gwb-c11=""
              d="M3.42871 3.42871V6.85703H6.85701V3.42871H3.42871Z"
              fill="white"
              fill-opacity="0.4"
            ></path>
            <path
              _ngcontent-gwb-c11=""
              d="M10.2856 10.2861V13.7148H13.7143V10.2861H10.2856Z"
              fill="white"
              fill-opacity="0.4"
            ></path>
            <path
              _ngcontent-gwb-c11=""
              d="M6.85693 6.85742V10.2861H10.2856V6.85742H6.85693Z"
              fill="white"
              fill-opacity="0.4"
            ></path>
            <path
              _ngcontent-gwb-c11=""
              d="M13.7144 13.7148V17.1435H17.143V13.7148H13.7144Z"
              fill="white"
              fill-opacity="0.4"
            ></path>
            <path
              _ngcontent-gwb-c11=""
              d="M20.5712 0.000318191V17.1427H17.1425V20.5714H0.000244141V24H24.0001V0L20.5712 0.000318191Z"
              fill="white"
              fill-opacity="0.4"
            ></path>
          </svg>
          <div className="visit absolute right-6 bottom-1 overflow-hidden w-20 transition-all ease-in-out duration-500">
            <p
              className={`${chakra_petch.className} font-semibold font-base leading-[18px] translate-x-full opacity-0 transition-all ease-in-out duration-500`}
            >
              Visit Site
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ExperienceCard;
