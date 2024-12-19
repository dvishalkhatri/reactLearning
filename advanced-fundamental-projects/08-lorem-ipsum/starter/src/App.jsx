import { useState } from 'react';
import text from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [counter, setCounter] = useState(1);
  const [textArray, setTextArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextArray(text.slice(0, parseInt(counter)));
    // console.log(textArray);
  };

  return (
    <main>
      <section className='section-center'>
        <h4>TIRED OF BORING LOREM IPSUM?</h4>
        <form action='' className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='lorem'>Paragraphs:</label>
          <input
            type='number'
            name='lorem'
            id='lorem'
            min='1'
            max='8'
            step='1'
            value={counter}
            onChange={(e) => setCounter(e.target.value)}
          />
          <button type='submit' className='btn'>
            Generate
          </button>
        </form>
        <article className='lorem-text'>
          {textArray.map((text) => {
            return <p key={nanoid()}>{text}</p>;
          })}
        </article>
      </section>
    </main>
  );
};
export default App;
