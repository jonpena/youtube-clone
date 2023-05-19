/* eslint-disable react/prop-types */
import { Stack, Box } from '@mui/material';

import { ChannelCard, Loader, VideoCard } from './';

// eslint-disable-next-line react/prop-types
const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      alignItems='flex-start'
      sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
      gap={1.8}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
