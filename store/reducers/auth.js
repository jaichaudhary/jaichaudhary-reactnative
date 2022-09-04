import {EMAIL_LOGIN_SUCCESS} from '../types/home';

const initialState = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphaS5jaGF1ZGhhcnkuMTA0NEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vamFpY2hhdWRoYXJ5IiwiaWF0IjoxNjYyMTQ3MjcyLCJleHAiOjE2NjI1NzkyNzJ9.UWdSyrRPWKb1oJwKhrggCukLJFtA3rWbdMIbbVK4ssU',
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case EMAIL_LOGIN_SUCCESS: {
      const {token} = action.body;
      return {...state, token};
    }
    default:
      return state;
  }
}
