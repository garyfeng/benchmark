import { arrayToggle, remove } from '../../../util/state-helpers';

export const initialState = {
  selected: undefined,
  eliminated: []
};

export function reducer(draft, action = {}) {
  let { type, payload } = action;

  switch (type) {
    case 'MCSS_SELECT':
      draft.selected = payload;
      remove(draft.eliminated, payload);
      return;
    case 'MCSS_ELIMINATE':
      if (payload === draft.selected) {
        draft.selected = undefined;
      }
      arrayToggle(draft.eliminated, payload);
      return;
    case 'MCSS_CLEAR':
      return initialState;
    // no default
  }
}
