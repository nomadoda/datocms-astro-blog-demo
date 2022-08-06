import cn from "classnames";
import type { DocumentNode } from "graphql";
import gql from "graphql-tag";
import type { FC, PropsWithChildren } from "react";

interface CategoryBadgeProps
  extends React.HTMLAttributes<HTMLElement>,
    PropsWithChildren {
  category: any;
}

export const CategoryBadge: FC<CategoryBadgeProps> & {
  fragment: DocumentNode;
} = ({ children, className, category, ...props }) => {
  return (
    <div
      className={cn(className, "rounded-full py-1 px-4 text-white text-xs")}
      style={{ backgroundColor: category.color.hex }}
      {...props}
    >
      <p>{category.name}</p>
    </div>
  );
};

CategoryBadge.fragment = gql`
  fragment CategoryBadge on CategoryRecord {
    id
    name
    color {
      hex
    }
  }
`;
