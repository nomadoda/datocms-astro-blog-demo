import MuxPlayer from "@mux/mux-player-react";
import cn from "classnames";
import type { FC, PropsWithChildren } from "react";
import type { UploadVideoField } from "../lib/datocms/types";

interface VideoProps
  extends React.HTMLAttributes<HTMLElement>,
    PropsWithChildren {
  video: UploadVideoField;
  videoId: string;
  videoTitle: string;
}

export const Video: FC<VideoProps> = ({
  children,
  className,
  video,
  videoTitle,
  videoId,
  ...props
}) => {
  return (
    <div className={cn(className, "")} {...props}>
      <MuxPlayer
        streamType="on-demand"
        playbackId={video.muxPlaybackId}
        metadata={{
          video_id: videoId,
          video_title: videoTitle,
        }}
      />
    </div>
  );
};
