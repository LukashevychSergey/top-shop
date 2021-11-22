import { BUY_GOOD } from './types';
const initialState = {
  goods: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  if (BUY_GOOD === type) {
    return { ...state, goods: state.goods.concat(payload) };
  }

  return state;
};
