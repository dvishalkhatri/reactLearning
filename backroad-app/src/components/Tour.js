const Tour = ({
  tourDate,
  title,
  displayText,
  imgVar,
  location,
  duration,
  cost,
}) => {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={imgVar} className='tour-img' alt='' />
        <p className='tour-date'>{tourDate}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{title}</h4>
        </div>
        <p>{displayText}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fas fa-map'></i>
            </span>{' '}
            {location}
          </p>
          <p>{duration} days</p>
          <p>from ${cost}</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
