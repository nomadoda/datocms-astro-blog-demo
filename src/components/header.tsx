import type { FC } from "react";
import { Image } from "react-datocms";
import { Container } from "./container";

export const Header: FC<{ logo: any }> = ({ logo }) => {
  return (
    <header className="bg-purple flex items-center justify-center px-5 py-3">
      <Container>
        <Image lazyLoad={false} data={logo.responsiveImage} />
      </Container>
    </header>
  );
};
