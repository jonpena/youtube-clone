import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        display: 'flex',
        height: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222222',
        borderRadius: 20,
        border: '1px solid #303030',
        pr: 1,
        boxShadow: 'none',
        mr: { sm: 2 },
      }}
    >
      <input
        className='w-96 h-full pl-4 flex rounded-s-full bg-[#121212] search-bar border-none outline-none text-white'
        placeholder='Buscar'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>

      <IconButton
        type='submit'
        sx={{ color: '#aaa', ml: 1 }}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
