import cn from "classnames";
import type { DocumentNode } from "graphql";
import gql from "graphql-tag";
import type { FC, PropsWithChildren } from "react";
import { responsiveImageFragment } from "../../lib/fragments";
import { Card } from "../card";
import { CategoryBadge } from "../category-badge";

interface PostCardProps
  extends React.HTMLAttributes<HTMLElement>,
    PropsWithChildren {
  post: any;
}

export const PostCard: FC<PostCardProps> & { fragment: DocumentNode } = ({
  children,
  className,
  post,
  ...props
}) => {
  return (
    <Card className={cn(className, "")} image={post.image} {...props}>
      <div className="flex flex-col items-start">
        <h3 className="mb-2">{post.title}</h3>
        <CategoryBadge className="mb-4" category={post.category} />
        <p className="text-gray-500 text-sm">{post.excerpt}</p>
      </div>
    </Card>
  );
};

PostCard.fragment = gql`
  fragment PostCard on PostRecord {
    id
    slug
    title
    excerpt
    image {
      responsiveImage(imgixParams: { fit: crop, w: 400, h: 200 }) {
        ...ResponsiveImage
      }
    }
    category {
      ...CategoryBadge
    }
  }
  ${responsiveImageFragment}
  ${CategoryBadge.fragment}
`;
