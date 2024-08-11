import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
};

const API_URL = 'http://localhost:8080';

const useFetch = <T, B>(
  endpoint: string,
  body?: B,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', // Default method is 'GET'
  queryParams?: { [key: string]: string | number | boolean },
): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const url = new URL(API_URL + endpoint);
  const JWT = Cookies.get('Bearer');

  if (queryParams) {
    Object.keys(queryParams).forEach((key) => {
      url.searchParams.append(key, String(queryParams[key]));
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options: RequestInit = {
          method,
          headers: {
            Authorization: 'Bearer ' + JWT,
            'Content-Type': 'application/json',
          },
        };

        if (body && method !== 'GET') {
          options.body = JSON.stringify(body);
        }

        const response = await fetch(url.toString(), options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url.toString(), body, method]);

  return { data, isLoading, error };
};

export default useFetch;
