/* eslint-disable react/prop-types */
import { Box } from '@mui/material';

import { ChannelCard, Loader, VideoCard } from './';

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader />;

  return (
    <div
      className={`grid gap-2 grid-cols-[repeat(auto-fit,minmax(300px,300px))]
      `}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </div>
  );
};

export default Videos;
