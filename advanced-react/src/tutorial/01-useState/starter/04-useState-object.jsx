import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Vishal',
    age: 29,
    hobby: 'Love to write program',
  });

  const newPerson = () => {
    setPerson({ name: 'Vidya Sagar', age: 28, hobby: 'Love to listen music' });
    // setPerson({ name: 'Vidya Sagar' });
    // setPerson({ ...person, name: 'Vidya Sagar' });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys To: {person.hobby}</h4>
      <button type='button' className='btn' onClick={newPerson}>
        Show Vidya Sagar
      </button>
    </>
  );
};

export default UseStateObject;
