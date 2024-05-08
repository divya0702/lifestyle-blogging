import React from 'react';
import NavigationBar from './NavigationBar';
import Carousel from './Carousel';

const HomePage: React.FC = () => {
  return (
    <>
    {/* <div style={{marginTop:'2rem'}}> */}
      <NavigationBar />
      <div style={{ minHeight: '0vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Carousel images={["https://1.bp.blogspot.com/-bMHmEKT-7vo/X3Udsu-AGSI/AAAAAAAF7mg/hTxQVF6p_Y81vRBRoU-IoOJpOE3-LxlfgCLcBGAsYHQ/s2048/october%2B2020%2Bmoodboard.jpg", "https://www.boredpanda.com/blog/wp-content/uploads/2024/01/Hey-Pandas-Post-a-Collage-of-Your-Dream-Life-65aadf183db3d__700.jpg", "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]}/>
      </div>
      {/* </div> */}
    </>
  );
};

export default HomePage;
