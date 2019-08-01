import Immutable from 'immutable';

const initialState = Immutable.Map();

const joke = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_JOKE':
      return state.set('url', action.url);
    default:
      return state;
  }
};

export default joke;
