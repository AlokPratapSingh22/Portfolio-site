import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Skill } from "../../typings";

export const fetchSkills = async () => {
  const query = groq`
*[_type=="skill"]
`;

  const skills: Skill[] = await sanityClient.fetch(query);
  return skills;
};
