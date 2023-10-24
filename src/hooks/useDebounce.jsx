import { useEffect, useState } from 'react';

//Custom hook used for creating delay between fetching requests
const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
        setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    }
  }, [value, delay]);
  return debounceValue;
}

export default useDebounce;