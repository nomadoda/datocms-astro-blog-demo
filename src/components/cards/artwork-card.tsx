import cn from "classnames";
import type { DocumentNode } from "graphql";
import gql from "graphql-tag";
import type { FC, PropsWithChildren } from "react";
import type { ArtworkRecord } from "../../lib/datocms/types";
import { responsiveImageFragment } from "../../lib/fragments";
import { Card } from "../card";

interface ArtworkCardProps
  extends React.HTMLAttributes<HTMLElement>,
    PropsWithChildren {
  artwork: ArtworkRecord;
}

export const ArtworkCard: FC<ArtworkCardProps> & { fragment: DocumentNode } = ({
  children,
  className,
  artwork,
  ...props
}) => {
  return (
    <Card className={cn(className, "")} image={artwork.image} {...props}>
      <div className="flex flex-col items-start">
        <h3 className="mb-2">{artwork.title}</h3>
        <p className="text-gray-500 text-sm">{artwork.excerpt}</p>
      </div>
    </Card>
  );
};

ArtworkCard.fragment = gql`
  fragment ArtworkCard on ArtworkRecord {
    id
    slug
    title
    excerpt
    image {
      responsiveImage(imgixParams: { fit: crop, w: 400, h: 200 }) {
        ...ResponsiveImage
      }
    }
  }
  ${responsiveImageFragment}
`;
