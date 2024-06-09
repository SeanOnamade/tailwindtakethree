import { useEffect, useState } from 'react'; // get useEffect and useState

const useLocalStorage = (key, initialValue) => { // receive the key and value
  const [storedValue, setStoredValue] = useState(() => { // inits storedVal with useStats hook
    try {
      const item = window.localStorage.getItem(key); // gets the key from storage
      return item ? JSON.parse(item) : initialValue; // parse JSON format if exists; otherwise, initVal
    } catch (error) {
      console.log(error); 
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
        // if value is a function, call it
      setStoredValue(valueToStore); // updated stored value var
      window.localStorage.setItem(key, JSON.stringify(valueToStore)); // put into local storage
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue]; // returns array containing these
};

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme');
  const isEnabled = typeof enabledState === 'undefined' && enabled;
    // check if enabled (and undefined?)
  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled, isEnabled]); // add and remove dark class whenever either enabled or isEnabled changes

  return [enabled, setEnabled];
};

export default useDarkMode;