import type { FC } from "react";
import {
  Image,
  StructuredText,
  StructuredTextGraphQlResponse,
} from "react-datocms";

interface BodyProps {
  body: StructuredTextGraphQlResponse<any, any>;
}

export const Body: FC<BodyProps> = ({ body, ...props }) => {
  return (
    <StructuredText
      data={body}
      renderBlock={({ record }) => {
        switch (record.__typename) {
          case "ImageRecord":
            return (
              <Image lazyLoad={false} data={record.image.responsiveImage} />
            );
          default:
            return null;
        }
      }}
    />
  );
};
