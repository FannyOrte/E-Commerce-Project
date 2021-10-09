export interface IMenuLinks {
  label: string;
  linkPath: string;
  key: string;
}

export interface ISiteMeta {
  siteMetadata: {
    title: string;
    description: string;
    siteUrl: string;
    author: string;
    menuLinks: Array<IMenuLinks>;
  };
}
