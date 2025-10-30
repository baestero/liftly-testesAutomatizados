import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    try {
      setMessage(null);
      setLoading(true);
      const response = await fetch(url, options);
      const json = await response.json();
      if (response.ok === false) setMessage(json.message);
      setData(json);
      return { response, json };
    } catch (err) {
      console.error(err);
      return { response: null, json: null };
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, setData, loading, message, request };
};

export default useFetch;
