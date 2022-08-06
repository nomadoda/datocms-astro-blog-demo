import cn from "classnames";
import type { FC, PropsWithChildren } from "react";
import { Image } from "react-datocms";

interface CardProps
  extends React.HTMLAttributes<HTMLElement>,
    PropsWithChildren {
  image?: any;
}

export const Card: FC<CardProps> = ({
  children,
  className,
  image,
  ...props
}) => {
  return (
    <div
      className={cn(
        className,
        "bg-white py-4 px-4 flex flex-col rounded-md transition-shadow shadow-md hover:shadow-lg"
      )}
      {...props}
    >
      {image ? (
        <div className="aspect-video w-full relative mb-4">
          <Image
            lazyLoad={false}
            data={image.responsiveImage}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      ) : null}
      {children}
    </div>
  );
};
