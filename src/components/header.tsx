import type { FC } from "react";
import { Image } from "react-datocms";
import { Container } from "./container";

export const Header: FC<{ logo: any }> = ({ logo }) => {
  return (
    <header className="bg-cyan flex items-center justify-center px-5 py-16">
      <Container>
        <a className="block mx-auto max-w-screen-sm" href="/">
          <Image lazyLoad={false} data={logo.responsiveImage} />
        </a>
      </Container>
    </header>
  );
};
