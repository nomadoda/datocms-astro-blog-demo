import type { FC, PropsWithChildren } from "react";

interface ContainerProps
  extends React.HTMLAttributes<HTMLElement>,
    PropsWithChildren {}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};
