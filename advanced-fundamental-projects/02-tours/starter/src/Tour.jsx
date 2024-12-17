import React from 'react';

const Tour = ({ image, name, info, price, id, removeTour }) => {
  /* console.log('image', image);
  console.log('name', name);
  console.log('price', price);
  console.log('info', info); */
  const [readMore, setReadMore] = React.useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type='button'
            className='info-btn'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : ' Read More'}
          </button>
        </p>
        <button
          type='button'
          className='btn delete-btn btn-block'
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
