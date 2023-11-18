import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [option, setOption] = useState(null);
  const postData = (postData) => {
    setOption({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  useEffect(() => {
    const fetchData = async (fetchOption) => {
      setIsLoading(true);

      try {
        const response = await fetch(url, { ...fetchOption });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();

        setIsLoading(false);

        setData(json);
        setError(null);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };

    if (method === "GET") {
      fetchData();
    }
    if (method === "POST" && option) {
      fetchData(option);
    }
  }, [method, option, url]);

  return { data, isLoading, error, postData };
};
