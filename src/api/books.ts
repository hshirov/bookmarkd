import BookCategory from 'src/enums/BookCategory.enum';
import axiosInstance from './axios';

const fields = 'items/id,items/volumeInfo(title,authors,description,pageCount,categories,imageLinks)';
const printType = 'books';

export const getBook = (id: string) => axiosInstance.get(`volumes/${id}`, { params: { fields } });

export const getBooks = (searchQuery: string, startIndex?: number, maxResults?: number) =>
  axiosInstance.get('volumes', {
    params: {
      q: searchQuery,
      startIndex,
      maxResults,
      fields,
      printType,
    },
  });

export const getBooksByCategory = (category: BookCategory, startIndex?: number, maxResults?: number) =>
  axiosInstance.get('volumes', {
    params: {
      q: `+subject:${category}`,
      startIndex,
      maxResults,
      fields,
      printType,
    },
  });
