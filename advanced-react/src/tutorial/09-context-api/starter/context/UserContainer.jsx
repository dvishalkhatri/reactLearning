import { useAppContext } from './Navbar';

const UserContainer = () => {
  const value = useAppContext();
  // console.log(value);
  // return 'hello world';
  return (
    <div className='user-container'>
      {value.user ? (
        <>
          <p>Hello there, {value.user?.name?.toUpperCase()}</p>
          <button type='button' className='btn' onClick={value.logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
export default UserContainer;
