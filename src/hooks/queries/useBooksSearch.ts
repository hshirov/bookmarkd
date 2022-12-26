import { useState, useCallback } from 'react';
import { useInfiniteQuery } from 'react-query';
import { GetBooksResponse } from 'interfaces/api/responses';
import { isNonEmptyArr, isNonEmptyStr } from 'utils/index';
import { getBooks } from 'api/books';

const useBooksSearch = (searchQuery: string, itemsPerPage = 30) => {
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const fetchBooks = useCallback(
    ({ pageParam = 0 }) => {
      if (!isNonEmptyStr(searchQuery)) {
        return Promise.resolve({ items: [] });
      }
      return getBooks(searchQuery, pageParam * itemsPerPage, itemsPerPage).then((res: unknown) => {
        const books = res as GetBooksResponse;
        if (!isNonEmptyArr(books.items) || books.items.length < itemsPerPage) {
          setHasReachedEnd(true);
        }
        return books;
      });
    },
    [searchQuery, setHasReachedEnd]
  );

  return useInfiniteQuery(['books', searchQuery], fetchBooks, {
    getNextPageParam: (_, allPages) => (hasReachedEnd ? undefined : allPages.length + 1),
    cacheTime: 0,
    staleTime: 0,
  });
};

export default useBooksSearch;
