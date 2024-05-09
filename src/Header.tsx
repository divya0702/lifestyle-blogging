import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import theme from './theme';

const Header: React.FC = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: theme.tertiaryColor}}>
      <div className='header-container'>
        <Typography component="div" className='div-css'>
          Life's Palette
        </Typography>
      </div>
      <style>
        {`
          .header-container {
            background-color: ${theme.secondaryColor};
            padding: 1rem;
            border-bottom: 1px solid #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .div-css {
            font-family: ${theme.primaryFont};
            font-size: 4rem;
            color: ${theme.tertiaryColor};
          }

          @media screen and (min-width: 400px) and (max-width: 790px) {
            .div-css {
              font-size: 2.75rem;
            }
          }
        `}
      </style>
    </Link>
  );
};

export default Header;
