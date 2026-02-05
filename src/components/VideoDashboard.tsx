import type { Video } from "../videos";
import { VideoCard } from "./VideoCard";


export function VideoDashboard({ videos }: { videos: Video[] }) {

  return (

    // cf pour resize live https://claude.ai/chat/53ad5055-ba03-45dc-b48e-44c043302101
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {videos.map((video: Video) => (
        <VideoCard video={video} />
      ))}

    </div>

  );
}
