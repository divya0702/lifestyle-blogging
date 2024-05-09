import React from 'react';
import { Carousel } from 'react-bootstrap';
import theme from './theme';

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
          <Carousel.Caption style={{ backgroundColor: 'rgba(186, 178, 181, 0.7)', color: theme.primaryColor, padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '1.25rem' }}>
            <p style={{ color: theme.primaryColor, margin: '0' }}>{captions[index]}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
