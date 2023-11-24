import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    return jsonValue !== null ? JSON.parse(jsonValue) : initialValue;
  });

  useEffect(() => {
    if (storedValue !== undefined) {
      localStorage.setItem(key, JSON.stringify(storedValue));
    }
  }, [key, storedValue]);

  return [storedValue || initialValue, setStoredValue];
};

export { useLocalStorage };
