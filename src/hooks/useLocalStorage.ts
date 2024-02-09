import { useState } from "react";

const useLocalStorage = <_T, U>(key: string, initalState: U) => {
  const localStorageValue = JSON.parse(
    localStorage.getItem(key) as string
  ) as U;
  const [state, _setState] = useState<U>(localStorageValue || initalState);

  const setState = (value: U) => {
    localStorage.setItem(key, JSON.stringify(value));
    _setState(value);
  };

  return [state, setState] as const;
};

export default useLocalStorage;
