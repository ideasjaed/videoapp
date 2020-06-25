import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <section className='carounsel'>
    <div className='carousel__container'>
      {children}
    </div>
  </section>
);

export default Carousel;
