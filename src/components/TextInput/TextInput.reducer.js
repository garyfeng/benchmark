export const initialState = {
  value: ''
};

export function reducer(state, action = {}) {
  switch (action.type) {
    case 'TEXTINPUT_UPDATE':
      return {
        value: action.value
      };
    case 'TEXTINPUT_CLEAR':
      return initialState;
    default:
      throw new Error();
  }
}
