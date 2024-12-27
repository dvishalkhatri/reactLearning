const Person = ({ name, age, image, id, removePerson }) => {
  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <div>
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
        <div>
          <button
            type='button'
            className='btn'
            onClick={() => removePerson(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};
export default Person;
