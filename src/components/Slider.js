import React from 'react';
import Slider from 'infinite-react-carousel';

import '../styles/_slider.scss';

const Carousel  = ({ images }) => {
	return (
		<section className='slider'>
      <div>
			<h1 className='slider__title'>ESTÁR CÓMODO NUNCA FUE TAN FÁCIL.</h1>
      <button className='slider__button'>SHOP</button>
      </div>
			<Slider className='slider__content'>
      
				{images.map((image) => (
					<div key={image.id} className='slider__content--item'>
						<img src={image.image} alt={image.title} />
						<p className='slider-description'>{image.title}</p>
					</div>
          
				))}
        
			</Slider>
		</section>
	)
}
export default Carousel;