import React from 'react';
import '../styles/_gallery.scss';

function Gallery() {
  return (
    <div className="gallery-container">
    <div className="grid-container">
      <img src={require('../images/gallery1.png') }/>
      <img src={require('../images/gallery2.png') }/>
      <img src={require('../images/gallery3.png') }/>
      <img src={require('../images/gallery4.png') }/>
      <img src={require('../images/gallery5.png') }/>
      <img src={require('../images/gallery6.png') }/>
    </div>
    </div>
  );
}

export default Gallery;