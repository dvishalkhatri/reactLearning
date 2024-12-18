import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState('react');

  const handlingShipping = (e) => {
    // console.log(e.target.checked);
    setShipping(e.target.checked);
  };
  const handlingFramework = (e) => {
    console.log(e.target.value);
    setFramework(setFramework);
  };
  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input
            type='checkbox'
            name='shipping'
            id='shipping'
            checked={shipping}
            onChange={handlingShipping}
          />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select
            name='framework'
            id='framework'
            className='form-select'
            onChange={handlingFramework}
          >
            {frameworks.map((program) => {
              return (
                <option key={program} value={program}>
                  {program}
                </option>
              );
            })}
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
