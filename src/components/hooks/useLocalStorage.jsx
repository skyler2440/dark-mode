import { useState } from "react";
import { expression } from "@babel/template";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    // if (item) {
    //     return JSON.parse(item);
    // }else {
    //     return initialValue;
    // }
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
