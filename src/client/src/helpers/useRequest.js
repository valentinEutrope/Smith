import { useState, useEffect } from "react";

/**
 * @description Hook calling queries and managing them
 * @param {Promise<any>} request promise to execute
 * @param {any[]} conditions values watched by useEffect for reload data when they change
 * @returns {{data: any, loading: boolean, error: any}}
 */
export const useRequest = (request, conditions = []) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    request
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, conditions);

  return { data, loading, error };
};

export default useRequest;
