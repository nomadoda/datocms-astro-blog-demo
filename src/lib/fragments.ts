import gql from "graphql-tag";

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
export const responsiveImageFragment = gql`
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`;

export const metaTagsFragment = gql`
  fragment metaTagsFragment on Tag {
    attributes
    content
    tag
  }
`;
