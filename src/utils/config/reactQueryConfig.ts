import { QueryClientConfig } from 'react-query';

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 120000, // 2 minutes
      cacheTime: 300000, // 5 minutes
    },
  },
};
