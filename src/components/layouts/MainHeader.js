import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import CarouselCard from './Carousel/CarouselCard';
import { ReactComponent as ArrowIcon } from '../../scss/icons/arrow.svg';
import carouselData from './Carousel/carouselData';

const MainHeader = () => {
  let Carousel;
  return (
    <header className="header">
      <h1 className="header__title">Lorem ipsum dolor sit amet conset</h1>
      <figure className="header__bg-shape" />
      <AliceCarousel
        responsive={{
          1024: {
            items: 3,
          },
        }}
        stagePadding={{
          paddingLeft: '4.5rem',
          paddingRight: '4.5rem',
        }}
        autoPlay={true}
        duration={500}
        autoPlayInterval={3000}
        buttonsDisabled={true}
        dotsDisabled={true}
        ref={el => (Carousel = el)}
      >
        {carouselData.map((card, index) => (
          <CarouselCard img={card.img} title={card.title} body={card.body} key={index} />
        ))}
      </AliceCarousel>
      <figure className="header__carousel-side header__carousel-side--left" />
      <figure className="header__carousel-side header__carousel-side--right" />
      <button
        className="header__carousel-button header__carousel-button--left"
        onClick={() => Carousel._slideNext()}
      >
        <ArrowIcon />
      </button>
      <button
        className="header__carousel-button header__carousel-button--right"
        onClick={() => Carousel._slidePrev()}
      >
        <ArrowIcon />
      </button>
    </header>
  );
};

export default MainHeader;
