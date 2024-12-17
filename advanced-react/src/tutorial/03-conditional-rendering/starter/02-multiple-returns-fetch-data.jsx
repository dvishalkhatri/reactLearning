import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  const fetchUserData = async () => {
    try {
      const response = await fetch(url);
      console.log(response);
      if (!response.ok) {
        setIsLoading(false);
        setIsError(true);
        return;
      }
      const user = await response.json();
      // console.log(user);
      setUser(user);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  const { name, company, avatar_url, bio } = user;
  return (
    <>
      <img
        src={avatar_url}
        alt={name}
        style={{ width: '150px', borderRadius: '25px' }}
      />
      <h2>{name}</h2>
      <h4>Works at {company}</h4>
      <p>{bio}</p>
    </>
  );
};
export default MultipleReturnsFetchData;
