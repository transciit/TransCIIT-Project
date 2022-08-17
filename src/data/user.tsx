/* eslint-disable no-console */
import axios from 'axios';
import useSWR from 'swr';

export default function useUser() {
  const fetcher = (apiURL: string) =>
    axios
      .post(apiURL, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  const { data, error } = useSWR(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAL5gPrDSQQiTa2dXKgd6gFwTjvxfvpAHc',
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
