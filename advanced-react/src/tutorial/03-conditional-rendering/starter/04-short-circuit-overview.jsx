import { useState } from 'react';

const ShortCircuitOverview = () => {
  //Falsy
  const [text, setText] = useState('');
  //Truthy
  const [name, setName] = useState('Vishal');

  const codeExample = text || 'hello world';
  console.log(codeExample);
  return (
    <>
      <h4>Falsy OR: {text || 'hello world'}</h4>
      <h4>Falsy AND: {text && 'hello world'}</h4>
      <h4>Truthy OR: {name || 'hello world'}</h4>
      <h4>Truthy AND: {name && 'hello world'}</h4>
      {codeExample}
    </>
  );
};
export default ShortCircuitOverview;
