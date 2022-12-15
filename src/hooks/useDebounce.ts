import { useEffect, useState } from 'react';

const useDebounce = (value: string, delayMs = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutHandler = setTimeout(() => setDebouncedValue(value), delayMs);

    return () => clearTimeout(timeoutHandler);
  }, [value, delayMs]);

  return debouncedValue;
};

export default useDebounce;
