import gql from "graphql-tag";

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
export const responsiveImageFragment = gql`
  fragment ResponsiveImage on ResponsiveImage {
    # HTML5 src/srcset/sizes attributes
    srcSet
    webpSrcSet
    sizes
    src

    # size information (post-transformations)
    width
    height
    aspectRatio

    # SEO attributes
    alt
    title

    # background color placeholder or...
    bgColor

    # blur-up placeholder, JPEG format, base64-encoded
    base64
  }
`;

export const metaTagFragment = gql`
  fragment MetaTag on Tag {
    attributes
    content
    tag
  }
`;

export const videoFragment = gql`
  fragment Video on UploadVideoField {
    muxPlaybackId
  }
`;
