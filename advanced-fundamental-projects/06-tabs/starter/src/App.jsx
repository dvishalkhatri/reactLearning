import { useEffect } from 'react';
import { useState } from 'react';
import Loading from './Loading';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError(true);
        return;
      }
      const res = await response.json();
      setJobs(res);
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return (
      <section className='jobs-center'>
        <h1>Sorry, there was error in fetching the data</h1>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <Loading />
      </section>
    );
  }

  return (
    <section className='jobs-center'>
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
