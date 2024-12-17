import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log('render');
  return (
    <div>
      <button type='button' className='btn' onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    /* // console.log('Hello from Random component');
    const intId = setInterval(() => {
      // console.log('Hello from Interval');
    }, 1000);
    return () => {
      clearInterval(intId);
      console.log('Clean Up');
    }; */
    const someFunc = () => {};
    window.addEventListener('scroll', someFunc);
    return () => window.removeEventListener('scroll', someFunc);
  }, []);
  return <h2>Hello Guys</h2>;
};

export default CleanupFunction;
