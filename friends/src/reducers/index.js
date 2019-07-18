import  * as actions from '../actions';

const initialState = {
  friends: [],
  error: null,
  loggingIn: false,
  token: localStorage.getItem('token')
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.LOGIN_START:
      return {
        ...state,
        error: null,
        loggingIn: true,
        token: null
      }
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        loggingIn: false,
        token: localStorage.getItem('token')
      }
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loggingIn: false,
        token: null
      }
    default:
      return state;
  }
}

export default reducer;