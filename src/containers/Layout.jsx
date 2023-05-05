/* eslint-disable react/prop-types */
import { Box } from '@mui/material';
import { Navbar } from '../components';

const Layout = ({ ...props }) => {
  return (
    <Box sx={{ background: '#101010', minHeight: '100vh' }}>
      <Box className='max-w-screen-2xl bg-[#101010]'>
        <Navbar />
        {props.children}
      </Box>
    </Box>
  );
};

export default Layout;
