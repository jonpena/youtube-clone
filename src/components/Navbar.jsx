import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { SearchBar } from './';
import { BASE_URI } from '../utils/constants';

const Navbar = () => (
  <Stack
    direction='row'
    alignItems='center'
    p={2}
    sx={{
      position: 'sticky',
      background: '#101010',
      top: 0,
      justifyContent: 'space-between',
    }}
  >
    <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
      <img
        className='ml-2'
        src={`${BASE_URI}/assets/youtube-icon.png`}
        alt='logo'
        width={48}
        height={48}
      />
      <span className='text-white font-semibold text-xl ml-2'>YuoTubo</span>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
