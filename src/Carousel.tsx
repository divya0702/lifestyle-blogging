import React from 'react';
import { Carousel } from 'react-bootstrap';

interface MyCarouselProps {
  images: string[];
}

const MyCarousel: React.FC<MyCarouselProps> = ({ images }) => {
  // Define an array of captions
  const captions: string[] = [
    'Living life, one adventure at a time.',
    "Finding joy in the little things.",
    "Choosing happiness, every day."
    // Add more captions as needed
  ];

  return (
    <Carousel style={{ maxWidth: '800px', margin: '0 auto' }}>
      {images.map((image, index) => (
        <Carousel.Item key={index} style={{ maxHeight: '500px' }}>
          <img src={image} className="d-block w-100" alt={`Slide ${index}`} style={{ maxHeight: '500px' }} />
          {/* Access the appropriate caption based on the slide number */}
          <Carousel.Caption style={{ backgroundColor: 'rgba(186, 178, 181, 0.7)', color: '#123c69', padding: '20px', borderRadius: '10px', fontSize: '2rem' }}>
            {/* <h3 style={{ color: '#ac3b61' }}>Slide {index + 1}</h3> */}
            {/* Render the caption based on the slide number */}
            <p style={{ color: '#123c69' }}>{captions[index]}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
