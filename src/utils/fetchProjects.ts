import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Project } from "../../typings";

export const fetchProjects = async () => {
  const query = groq`
*[_type=="project"]{
    ...,
    technologies[]->
}
`;

  type Data = {
    projects: Project[];
  };

  const projects: Project[] = await sanityClient.fetch(query);
  return projects;
};
