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
      width: { xs: '90%', sm: '360px', md: '300px' },
      margin: 'auto',
      boxShadow: 'none',
      borderRadius: 0,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: '#101010', height: '106px' }}>
      <Link to={`/video/${videoId}`}>
        <Typography variant='subtitle1' fontWeight='bold' color='white'>
          {snippet?.title.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={`/channel/${snippet?.channelId}`}>
        <Typography variant='subtitle2' color='gray'>
          {snippet?.channelTitle}
          <CheckCircleIcon
            sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
