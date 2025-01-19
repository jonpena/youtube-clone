/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: { xs: '95vw', sm: '320px', md: '300px' },
      boxShadow: 'none',
      borderRadius: 0,
      backgroundColor: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      paddingRight: 0,
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{
          width: '100%',
          paddingTop: '56.25%',
          borderRadius: '12px',
          '&:hover': {
            transform: 'scale(1.02)',
            transition: 'transform 0.3s ease-in-out',
          },
        }}
      />
    </Link>
    <CardContent
      sx={{
        backgroundColor: 'transparent',
        height: '106px',
        padding: '12px 0',
        '&:last-child': { paddingBottom: 0 },
      }}
    >
      <Link to={`/video/${videoId}`}>
        <Typography
          variant='subtitle1'
          fontWeight='bold'
          color='white'
          sx={{
            lineHeight: '1.2',
            marginBottom: '4px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {snippet?.title}
        </Typography>
      </Link>
      <Link to={`/channel/${snippet?.channelId}`}>
        <Typography
          variant='subtitle2'
          color='gray'
          sx={{
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              color: 'white',
            },
          }}
        >
          {snippet?.channelTitle}
          <CheckCircleIcon
            sx={{ fontSize: '14px', color: 'gray', ml: '5px' }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
