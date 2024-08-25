import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeSinglePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  };
  const clearPeople = () => {
    setPeople([]);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        const handleClick = () => {
          removeSinglePerson(id);
        };
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <div>
              <button type='button' className='btn' onClick={handleClick}>
                Remove Item
              </button>
            </div>
          </div>
        );
      })}
      <button
        type='button'
        className='btn'
        onClick={clearPeople}
        style={{ marginTop: '2rem', backgroundColor: 'red' }}
      >
        Clear Item
      </button>
    </div>
  );
};

export default UseStateArray;
