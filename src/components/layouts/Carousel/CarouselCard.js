import React from 'react';
import { ReactComponent as ArrowIcon } from '../../../scss/icons/arrow.svg';

const CarouselCard = props => {
  const { img, title, body } = props;
  return (
    <figure className="carousel-card">
      <img className="carousel-card__img" src={img} alt="Card" />
      <div className="carousel-card__content">
        <h3 className="carousel-card__title">{title}</h3>
        <p className="carousel-card__body">{body}</p>
        <button className="carousel-card__action">
          <ArrowIcon fill="#000" />
        </button>
      </div>
    </figure>
  );
};

export default CarouselCard;
