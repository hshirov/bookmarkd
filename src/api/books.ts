import axiosInstance from '../axios';

const fields = 'volumeInfo(title,authors,description,pageCount,categories,imageLinks)';

export const getBook = (id: string) => axiosInstance.get(`volumes/${id}`, { params: { fields } });

export const getBooks = (searchQuery: string, startIndex?: number, maxResults?: number) =>
  axiosInstance.get('volumes', {
    params: {
      q: searchQuery,
      startIndex,
      maxResults,
      fields: `items/${fields}`,
    },
  });
