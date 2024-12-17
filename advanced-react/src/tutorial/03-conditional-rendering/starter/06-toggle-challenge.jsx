import { useState } from 'react';

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  /* const toggleAlert = () => {
    if (showAlert) {
      setShowAlert(false);
      return;
    }
    setShowAlert(true);
  }; */

  return (
    <>
      <button
        type='button'
        className='btn'
        onClick={() => setShowAlert(!showAlert)}
      >
        toggle alert
      </button>
      {showAlert && <Alert />}
    </>
  );
};

const Alert = () => {
  return <div className='alert alert-danger'>Welcome to the site</div>;
};

export default ToggleChallenge;
