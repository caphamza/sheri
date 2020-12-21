import {
  userData
} from './userReducers';

import {combineReducers} from 'redux';

const appReducer = combineReducers({
  userData,
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT'){
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;