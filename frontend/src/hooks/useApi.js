import { useState, useEffect } from "react";

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/test");
        if (!response.ok) throw new Error("failed to fetch");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};
export default useApi;
