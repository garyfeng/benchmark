import { useState, useEffect } from 'react';

export function useArrayToggle() {
  const [state, setState] = useState([]);

  function toggle(item) {
    if (state.includes(item)) {
      setState(state.filter(i => i !== item));
    } else {
      setState([...state, item]);
    }
  }

  function reset() {
    setState([]);
  }

  return [state, toggle, reset];
}

export function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggle = () => setState(!state);
  return [state, toggle];
}

export const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
