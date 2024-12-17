import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const loginFunc = () => {
    return setUser({ name: 'Vishal Kumar Khatri' });
  };
  const logoutFunc = () => {
    return setUser(null);
  };
  return (
    <>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button type='button' className='btn' onClick={logoutFunc}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button type='button' className='btn' onClick={loginFunc}>
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
