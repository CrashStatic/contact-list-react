import {useEffect, useState} from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [localStorageValue, setLocalStorageValue] = useState<T>(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localStorageValue));
  }, [localStorageValue]);

  return [localStorageValue, setLocalStorageValue] as const;
}
