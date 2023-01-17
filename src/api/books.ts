import BookCategory from 'enums/BookCategory.enum';
import axiosInstance from './axios';

const booksFields = 'items/id,items/volumeInfo(title,authors,description,pageCount,categories,imageLinks)';
const bookFields = 'id,volumeInfo(title,authors,description,pageCount,categories,imageLinks)';
const printType = 'books';

export const getBook = (id: string) => axiosInstance.get(`volumes/${id}`, { params: { fields: bookFields } });

export const getBooks = (searchQuery: string, startIndex?: number, maxResults?: number) =>
  axiosInstance.get('volumes', {
    params: {
      q: searchQuery,
      startIndex,
      maxResults,
      fields: booksFields,
      printType,
    },
  });

export const getBooksByCategory = (category: BookCategory, startIndex?: number, maxResults?: number) =>
  axiosInstance.get('volumes', {
    params: {
      q: `+subject:${category}`,
      startIndex,
      maxResults,
      fields: booksFields,
      printType,
    },
  });
