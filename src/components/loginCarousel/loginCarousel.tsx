import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// interface carouselProps {
//     className?:
// }
const LoginCarousel = () => {
  return (
    <Carousel
      showIndicators={false}
      swipeable={false}
      showStatus={false}
      showArrows={false}
      autoPlay
      showThumbs={false}
      infiniteLoop
      className='h-full w-full object-cover'
    >
      <div className='h-screen w-full object-cover'>
        <img className='h-full w-full object-cover' alt='' src='images/img1.jpg' />
      </div>
      <div className='h-screen w-full object-cover'>
        <img className='h-full w-full object-cover' alt='' src='images/IMG4.png' />
      </div>
      <div className='h-screen w-full object-cover'>
        <img className='h-full w-full object-cover' alt='' src='images/img9.jpg' />
      </div>
      <div className='h-screen w-full object-cover'>
        <img className='h-full w-full object-cover' alt='' src='images/IMG11.jpg' />
      </div>
    </Carousel>
  );
};

export default LoginCarousel;
