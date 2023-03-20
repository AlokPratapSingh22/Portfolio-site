import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experience } from "../../typings";
export const fetchExperiences = async () => {
  const query = groq`
  *[_type=="experience"]{
      ...,
      technologies[]->
  }
  `;

  const experiences: Experience[] = await sanityClient.fetch(query);

  return experiences;
};
