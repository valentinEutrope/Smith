import { useState, useEffect } from "react";

export const useRequest = ({ request }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      request
        .then((response) => {
          setData(response);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setLoading(false));
    }
  }, [request, data]);

  return { data, loading, error };
};

export default useRequest;
