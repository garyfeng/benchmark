export const initialState = {
  activeTab: 0
};

export function reducer(state, action = {}) {
  switch (action.type) {
    case 'SELECT_TAB':
      return {
        activeTab: action.tabIndex
      };
    default:
      throw new Error();
  }
}
