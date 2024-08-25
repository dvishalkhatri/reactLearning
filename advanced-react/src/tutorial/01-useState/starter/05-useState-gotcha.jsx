import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    /* setTimeout(() => {
      console.log('vishal');
      setValue(value + 1);
    }, 3000); */
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <h2>{value}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Increment
      </button>
    </>
  );
};

export default UseStateGotcha;
