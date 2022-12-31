import { useState, useCallback } from 'react';
import { useInfiniteQuery } from 'react-query';
import { GetBooksResponse } from 'interfaces/api/responses.interface';
import BookCategory from 'enums/BookCategory.enum';
import { isNonEmptyArr } from 'utils/index';
import { getBooksByCategory } from 'api/books';

const useBooksByCategory = (category: BookCategory, startIndex = 0, itemsPerPage = 10) => {
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  const fetchBooks = useCallback(
    ({ pageParam = 0 }) =>
      getBooksByCategory(category, startIndex + pageParam * itemsPerPage, itemsPerPage).then((res: unknown) => {
        const books = res as GetBooksResponse;
        if (!isNonEmptyArr(books.items) || books.items.length < itemsPerPage) {
          setHasReachedEnd(true);
        }
        return books;
      }),
    [category, setHasReachedEnd]
  );

  return useInfiniteQuery(['books', { category }], fetchBooks, {
    getNextPageParam: (_, allPages) => (hasReachedEnd ? undefined : allPages.length + 1),
    cacheTime: 0,
    staleTime: 0,
  });
};

export default useBooksByCategory;
