import { useState } from 'react';

export function useArrayToggle() {
  const [state, setState] = useState([]);

  function toggle(item) {
    if (state.includes(item)) {
      setState(state.filter(i => i !== item));
    } else {
      setState([...state, item]);
    }
  }

  return [state, toggle];
}
