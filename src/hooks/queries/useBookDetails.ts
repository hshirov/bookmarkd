import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { GetBookResponse } from 'interfaces/api/responses';
import { getBook } from 'api/books';

const useBookDetails = (id: string) => {
  const fetchBook = useCallback(() => getBook(id).then((res: unknown) => res as GetBookResponse), [id]);

  return useQuery(['book', id], fetchBook);
};

export default useBookDetails;
