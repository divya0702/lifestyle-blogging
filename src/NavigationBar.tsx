import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import theme from './theme';

const NavigationBar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className='nav-css' style={{ fontFamily: theme.primaryFont, fontSize: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
        <li style={{ marginRight: '5rem' }}>
          <Link to="/technology" className="nav-link" style={{ textDecoration: 'none', color: location.pathname === '/technology' ? theme.primaryColor : 'inherit', borderBottom: location.pathname === '/technology' ? `2px solid ${theme.primaryColor}` : 'none' }}>Technology</Link>
        </li>
        <li style={{ marginRight: '5rem' }}>
          <Link to="/travel" className="nav-link" style={{ textDecoration: 'none', color: location.pathname === '/travel' ? theme.primaryColor : 'inherit', borderBottom: location.pathname === '/travel' ? `2px solid ${theme.primaryColor}` : 'none' }}>Travel</Link>
        </li>
        <li>
          <Link to="/food" className="nav-link" style={{ textDecoration: 'none', color: location.pathname === '/food' ? theme.primaryColor : 'inherit', borderBottom: location.pathname === '/food' ? `2px solid ${theme.primaryColor}` : 'none' }}>Food</Link>
        </li>
      </ul>
      <style>
        {`
          @media screen and (min-width: 400px) and (max-width: 1060px) {\
            .nav-css{
              padding-right: 1rem;
            }
            .nav-link {
              font-size: 1.25rem;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default NavigationBar;
