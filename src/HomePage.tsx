// HomePage.tsx
import React from 'react';
import NavigationBar from './NavigationBar';
import Carousel from './Carousel';

const HomePage: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <div style={{ minHeight: '0vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Carousel images={[
          "https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1479710/pexels-photo-1479710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ]}/>
      </div>
    </>
  );
};

export default HomePage;
