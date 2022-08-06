import cn from "classnames";
import type { FC, PropsWithChildren } from "react";

interface PageBlockProps
  extends React.HTMLAttributes<HTMLElement>,
    PropsWithChildren {}

export const PageBlock: FC<PageBlockProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={cn(className, "py-16")} {...props}>
      {children}
    </section>
  );
};
