import cn from "classnames";
import {
  isBlockquote,
  isHeading,
  isList,
  isParagraph,
  isRoot,
} from "datocms-structured-text-utils";
import type { FC } from "react";
import {
  Image,
  renderNodeRule,
  StructuredText,
  StructuredTextGraphQlResponse,
} from "react-datocms";
import type { MediaAssetRecord, UploadVideoField } from "../lib/datocms/types";

interface BodyProps {
  body: StructuredTextGraphQlResponse<
    MediaAssetRecord & { id: string; __typename: string },
    any
  >;
  headingLevelFrom?: number;
  videoId?: string;
  videoTitle?: string;
  renderVideo?: (video: UploadVideoField) => any;
}

export const Body: FC<BodyProps> = ({
  body,
  headingLevelFrom = 2,
  renderVideo,
}) => {
  return (
    <StructuredText
      data={body}
      customNodeRules={[
        renderNodeRule(
          isHeading,
          ({ adapter: { renderNode }, node, children, key }) => {
            const level: number = node.level + headingLevelFrom - 1;
            return renderNode(`h${level}`, {
              key,
              className: cn([
                "mb-8",
                {
                  1: "text-3xl",
                  2: "text-2xl",
                  3: "text-xl",
                  4: "text-lg",
                  5: "text-lg",
                  6: "text-lg",
                }[node.level],
              ]),
              children,
            });
          }
        ),
        renderNodeRule(
          isParagraph,
          ({ adapter: { renderNode }, children, key, ancestors }) => {
            const isTopLevelParagraph = isRoot(ancestors[0]);
            return renderNode("p", {
              key,
              className: cn([isTopLevelParagraph ? "mb-8" : "mb-4"]),
              children,
            });
          }
        ),
        renderNodeRule(
          isList,
          ({ adapter: { renderNode }, node, children, key }) => {
            const isOrdered = node.style === "numbered";
            return renderNode(isOrdered ? "ol" : "ul", {
              key,
              className: cn([
                "mb-8 ml-8",
                isOrdered ? "list-disc" : "list-decimal",
              ]),
              children,
            });
          }
        ),
        renderNodeRule(
          isBlockquote,
          ({ adapter: { renderNode }, children, key }) => {
            return renderNode("blockquote", {
              key,
              className: "mb-8 italic",
              children,
            });
          }
        ),
      ]}
      renderBlock={({ record }) => {
        switch (record.__typename) {
          case "MediaAssetRecord":
            return record.media.responsiveImage ? (
              <Image
                className="mx-auto mb-8 md:mx-0"
                lazyLoad={false}
                data={record.media.responsiveImage}
              />
            ) : record.media.video && renderVideo ? (
              <div className="mx-auto mb-8 md:mx-0">
                {renderVideo?.(record.media.video)}
              </div>
            ) : null;
          default:
            return null;
        }
      }}
    />
  );
};
