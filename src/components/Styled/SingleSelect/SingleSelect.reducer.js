export const initialState = {
  selected: null,
  eliminated: []
};

export function reducer(state, action = {}) {
  switch (action.type) {
    case 'MCSS_SELECT':
      return {
        selected: action.optionId,
        eliminated: state.eliminated.filter(i => i !== action.optionId)
      };
    case 'MCSS_ELIMINATE':
      let eliminated = state.eliminated.includes(action.optionId)
        ? state.eliminated.filter(i => i !== action.optionId)
        : [...state.eliminated, action.optionId];
      let selected = action.optionId === state.selected ? null : state.selected;
      return { selected, eliminated };
    case 'MCSS_CLEAR':
      return initialState;
    default:
      throw new Error();
  }
}
