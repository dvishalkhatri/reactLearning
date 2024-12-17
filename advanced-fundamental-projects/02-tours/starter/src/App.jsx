import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [tourData, setTourData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const removeTour = (id) => {
    const newTour = tourData.filter((tour) => tour.id !== id);
    setTourData(newTour);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      // console.log(response);
      if (!response.ok) {
        setIsError(true);
        return;
      }
      const data = await response.json();
      // console.log(data);
      setTourData(data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>There was an error...</h2>
      </div>
    );
  }
  return (
    <main>
      {tourData.length === 0 ? (
        <div className='title'>
          <h2>No tours left</h2>
          <button className='btn' onClick={() => fetchData()}>
            Reload
          </button>
        </div>
      ) : (
        <Tours tours={tourData} removeTour={removeTour} />
      )}
    </main>
  );
};
export default App;
