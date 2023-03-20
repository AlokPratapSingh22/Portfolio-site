import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../typings";

export const fetchPageInfo = async () => {
  const query = groq`
  *[_type == "pageInfo"]{
    ...,
    socials[]->
  }[0]
`;

  const pageInfo: PageInfo = await sanityClient.fetch(query);

  return pageInfo;
};
