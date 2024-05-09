import React from 'react';
import theme from './theme';

const Footer: React.FC = () => {
  return (
    <footer style={{backgroundColor: 'rgb(186, 178, 181, 0.25)', color: theme.primaryColor, padding: '20px', textAlign: 'center' }}>
      <div>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Life's Palette. All rights reserved.</p>
        <p style={{ margin: 0 }}>Designed and developed by Divya Kamila</p>
      </div>
    </footer>
  );
};

export default Footer;
