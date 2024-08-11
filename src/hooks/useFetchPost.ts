import React, { useState } from 'react';

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  fetchData: () => Promise<T>;
  showToast: boolean;
};

const API_URL = 'http://localhost:8080';

const useFetchPost = <T, B>(
  url: string,
  body?: B,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
): FetchState<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const newUrl = API_URL + url;

  const fetchData = async () => {
    try {
      setLoading(true);
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (body && method !== 'GET') {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(newUrl, options);
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const jsonData = await response.json();
      setData(jsonData);
      return jsonData;
    } catch (err) {
      if (err) {
        throw err;
      }
    } finally {
      setLoading(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 1500);
    }
  };

  return { data, isLoading, fetchData, showToast };
};

export default useFetchPost;
