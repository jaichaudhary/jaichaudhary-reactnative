import {START_LOADING, STOP_LOADING} from '../types/loader';
import {USER_LOGOUT_SUCCESS} from '../types/home';

const initialState = {
  count: 0,
};

export function loader(state = initialState, action) {
  switch (action.type) {
    case START_LOADING: {
      return {...state, count: ++state.count};
    }
    case STOP_LOADING: {
      return {...state, count: Math.max(0, --state.count)};
    }
    case USER_LOGOUT_SUCCESS: {
      return {...initialState, count: 0};
    }
    default:
      return state;
  }
}
