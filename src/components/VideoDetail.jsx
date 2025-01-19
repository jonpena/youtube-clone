import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

import { Videos, Loader } from './';
import { fetchFromAPI } from '../utils/fetchAPI';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
      console.log(data);
    });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: {
      title,
      channelId,
      channelTitle,
      description,
      publishedAt,
      thumbnails,
    },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  const formattedDate = new Date(publishedAt).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Box minHeight='100vh' sx={{ backgroundColor: '#0f0f0f' }}>
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        spacing={2}
        className='ml-0 lg:ml-4'
      >
        <Box flex={1}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className='!w-full !aspect-video lg:!h-[77dvh]'
            controls={true}
          />

          <Box sx={{ maxWidth: '1280px', p: 0, pt: 2, px: 1 }}>
            <Typography color='#fff' variant='h5' fontWeight='bold' mb={2}>
              {title}
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent='space-between'
              alignItems={{ xs: 'start', sm: 'center' }}
              sx={{ color: '#fff' }}
              spacing={2}
            >
              <Stack direction='row' alignItems='center' spacing={2}>
                <Box
                  component='img'
                  src={thumbnails?.default?.url} // Agrega un avatar por defecto
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <Box>
                  <Link to={`/channel/${channelId}`}>
                    <Typography
                      variant='subtitle1'
                      color='#fff'
                      fontWeight='bold'
                    >
                      {channelTitle}
                      <CheckCircleIcon
                        sx={{ fontSize: '14px', color: 'gray', ml: '5px' }}
                      />
                    </Typography>
                  </Link>
                  <Typography variant='body2' sx={{ color: '#aaa' }}>
                    1M subscribers
                  </Typography>
                </Box>
                <Button
                  variant='contained'
                  sx={{
                    bgcolor: '#fff',
                    color: '#000',
                    borderRadius: '20px',
                    '&:hover': { bgcolor: '#f2f2f2' },
                  }}
                >
                  Subscribe
                </Button>
              </Stack>

              <Stack direction='row' spacing={1}>
                <Button
                  variant='contained'
                  startIcon={<ThumbUpAltOutlinedIcon />}
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderRadius: '20px',
                    color: '#fff',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                  }}
                >
                  {parseInt(likeCount).toLocaleString()}
                </Button>
                <Button
                  variant='contained'
                  startIcon={<ShareOutlinedIcon />}
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderRadius: '20px',
                    color: '#fff',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                  }}
                >
                  Share
                </Button>
              </Stack>
            </Stack>

            <Box
              sx={{
                bgcolor: 'rgba(255,255,255,0.1)',
                borderRadius: 2,
                p: 2,
                mt: 2,
              }}
            >
              <Typography variant='body2' color='#fff' fontWeight='bold'>
                {parseInt(viewCount).toLocaleString()} views • {formattedDate}
              </Typography>
              <Typography
                variant='body2'
                color='#fff'
                sx={{
                  mt: 1,
                  maxHeight: showMore ? 'none' : '60px',
                  overflow: 'hidden',
                }}
              >
                {description}
              </Typography>
              <Button
                onClick={() => setShowMore(!showMore)}
                sx={{ color: '#fff', mt: 1 }}
              >
                {showMore ? 'Show less' : 'Show more'}
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', xl: '400px' },
            px: 2,
            py: 1,
          }}
        >
          <Videos videos={videos} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
