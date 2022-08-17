/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
import axios from 'axios';
import useSWR from 'swr';

import useUser from './user';

export default function getProjects() {
  const { user, isLoading, isError } = useUser();
  if (!isLoading && !isError && user) {
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
      'https://firestore.googleapis.com/v1/{parent=projects/*/databases/*/documents}:runQuery',
      fetcher
    );
    return {
      project: data,
      isLoading: !error && !data,
      isError: error,
    };
  }
  return {};
}
