import { useStaticQuery, graphql } from "gatsby";
import { ISiteMeta } from "./useSiteMeta.types";

const useSiteMetaHook = (): ISiteMeta => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            menuLinks {
              label
              linkPath
              key
            }
          }
        }
      }
    `
  );
  return site;
};

export default useSiteMetaHook;
