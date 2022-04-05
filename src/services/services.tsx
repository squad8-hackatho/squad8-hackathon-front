import { api } from './api';

export async function getUsers<T = unknown>(url: string) {
  let data: T | null = null;
  let isFetching = true;
  let error: Error | null = null;

  await api
    .get(url)
    .then((response) => {
      data = response.data;
    })
    .catch((err) => {
      error = err;
    })
    .finally(() => {
      isFetching = false;
    });

  return { data, isFetching, error };
}
