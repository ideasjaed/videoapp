import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const App = () => {
  const [video, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((r) => r.json)
      .then((req) => console.log(req));
  }, []);

  console.log(video);
  return (
    <div className='App'>
      <Header />
      <Search />
      <Categories title='Mi lista'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title='Tendencias'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title='Origineles'>
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
