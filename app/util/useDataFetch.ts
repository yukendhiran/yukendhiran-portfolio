
// useDataFetching.js
import { useState, useEffect } from 'react';
import { client } from '../lib/sanity'; // Import your Sanity client

const useDataFetch = (query) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    client.fetch(query).then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  return data;
};

export default useDataFetch;