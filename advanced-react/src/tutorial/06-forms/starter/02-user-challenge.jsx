import { useEffect, useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [userData, setUserData] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log(name);
    if (!name) return;
    const fakeId = Date.now();
    console.log(fakeId);
    // const newUser = { id: fakeId, name: name };
    const newUser = { id: fakeId, name };
    console.log(newUser);
    setUserData([...userData, newUser]);
    setName('');
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>users</h2>
      {userData.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button
              type='button'
              className='btn'
              onClick={() =>
                setUserData(
                  userData.filter((userVal) => userVal.id !== user.id)
                )
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
