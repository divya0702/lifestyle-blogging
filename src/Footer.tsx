import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{marginTop: '4rem', backgroundColor: 'rgb(186, 178, 181, 0.5)', color: '#ac3b61', padding: '20px', textAlign: 'center' }}>
      <div>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Life's Palette. All rights reserved.</p>
        <p style={{ margin: 0 }}>Designed and developed by Divya Kamila</p>
      </div>
    </footer>
  );
};

export default Footer;
