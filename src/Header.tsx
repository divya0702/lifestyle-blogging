import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: '#ac3b61'}}>
      <div style={{ backgroundColor: '#EEE2DC', padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography component="div" style={{ fontFamily:'Dancing Script, cursive', fontSize: '4rem', color: '#ac3b61'}}>
          Life's Palette
        </Typography>
      </div>
    </Link>
  );
};

export default Header;
