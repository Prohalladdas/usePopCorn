import { useState, useEffect } from "react";

export function useLocalStorageState(initialValue, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
