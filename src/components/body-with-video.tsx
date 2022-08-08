import type { FC } from "react";
import type { StructuredTextGraphQlResponse } from "react-datocms";
import type { MediaAssetRecord } from "../lib/datocms/types";
import { Body } from "./body";
import { Video } from "./video";

interface BodyWithVideoProps {
  body: StructuredTextGraphQlResponse<
    MediaAssetRecord & { id: string; __typename: string },
    any
  >;
  videoId: string;
  videoTitle?: string;
  headingLevelFrom?: number;
}

export const BodyWithVideo: FC<BodyWithVideoProps> = ({
  body,
  headingLevelFrom = 2,
  videoId,
  videoTitle = "unknown",
}) => (
  <Body
    body={body}
    headingLevelFrom={headingLevelFrom}
    renderVideo={(video) => (
      <Video video={video} videoId={videoId} videoTitle={videoTitle} />
    )}
  />
);
