import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar: React.FC = () => {
  const location = useLocation();

  return (
    <nav style={{ fontFamily: 'Dancing Script, cursive', fontSize: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
        <li style={{ marginRight: '5rem' }}>
          <Link to="/technology" style={{ textDecoration: 'none', color: location.pathname === '/technology' ? '#123c69' : 'inherit', borderBottom: location.pathname === '/technology' ? '2px solid #123c69' : 'none' }}>Technology</Link>
        </li>
        <li style={{ marginRight: '5rem' }}>
          <Link to="/travel" style={{ textDecoration: 'none', color: location.pathname === '/travel' ? '#123c69' : 'inherit', borderBottom: location.pathname === '/travel' ? '2px solid #123c69' : 'none' }}>Travel</Link>
        </li>
        <li>
          <Link to="/food" style={{ textDecoration: 'none', color: location.pathname === '/food' ? '#123c69' : 'inherit', borderBottom: location.pathname === '/food' ? '2px solid #123c69' : 'none' }}>Food</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
