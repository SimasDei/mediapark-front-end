import React from 'react';
import HeaderH1 from '../../shared/HeaderH1';

const Gallery = () => {
  return (
    <section className="gallery">
      <HeaderH1>Naujienos</HeaderH1>
      <div className="gallery__container">
        <div className="gallery__grid">
          <div className="gallery__grid-item grid-item">
            <div className="grid-item__title">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="gallery__grid-item grid-item">
            <div className="grid-item__title">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="gallery__grid-item grid-item">
            <div className="grid-item__title">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="gallery__grid-item grid-item">
            <div className="grid-item__title">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="gallery__grid-item grid-item">
            <div className="grid-item__title">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="gallery__grid-item grid-item">
            <div className="grid-item__title">Lorem ipsum dolor sit amet</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
