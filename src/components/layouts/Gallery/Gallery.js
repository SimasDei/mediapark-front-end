import React from 'react';
import HeaderH1 from '../../shared/HeaderH1';
import Button from '../../shared/Button';
import galleryData from './galleryData';

const Gallery = () => {
  return (
    <section className="gallery">
      <HeaderH1>Naujienos</HeaderH1>
      <div className="gallery__container">
        <div className="gallery__grid">
          {galleryData.map((item, index) => (
            <div
              className="gallery__grid-item grid-item"
              style={{ backgroundImage: `url(${item.img})` }}
              key={index}
            >
              <p className="grid-item__title">{item.title}</p>
              <div className="grid-item__overlay" />
            </div>
          ))}
        </div>
        <Button>Daugiau naujienų</Button>
      </div>
    </section>
  );
};

export default Gallery;
