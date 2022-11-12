import axiosInstance from '../axios';

export const getBook = (id: string) => axiosInstance.get(`volumes/${id}`);

export const getBooks = (searchQuery: string, startIndex?: number, maxResults?: number) =>
  axiosInstance.get('volumes', {
    params: {
      q: searchQuery,
      startIndex,
      maxResults,
    },
  });
