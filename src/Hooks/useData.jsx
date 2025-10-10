import axios from 'axios';
import { useEffect, useState } from 'react';

const useData = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios('/appData.json')
      .then(data => setApps(data.data))
      .catch(err => setError(err))
      .finally(setLoading(false));
  }, []);

  return { apps, loading, error };
};
export default useData;