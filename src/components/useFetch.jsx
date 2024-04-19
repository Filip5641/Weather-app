import { useEffect, useState } from "react";

const useFetch = (url, dependencies) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(url);
      const fetchedData = await response.json();
      setData(fetchedData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    console.log(dependencies);
    if (dependencies.some((dep) => dep === undefined || dep === null)) return;

    fetchData();
  }, dependencies);

  return { data, loading, error };
};

export default useFetch;
