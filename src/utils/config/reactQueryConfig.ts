import { QueryClientConfig } from 'react-query';

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 120000,
    },
  },
};
