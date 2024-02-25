import * as actionTypes from '../actions/actions';

interface AuthActions {
  setUser: (dispatch: any, loginPayload: any) => void;
  logout: (dispatch: any) => void;
}

const authActions: AuthActions = {
  /* The `setUser` function within the `authActions` object is a method that takes two parameters:
  `dispatch` and `loginPayload`. When this function is called, it dispatches an action with a type
  of `LOGIN_SUCCESS` and a payload of `loginPayload`. This action is typically used to update the
  user's authentication status or user data in the application state. */
  setUser: (dispatch: any, loginPayload: any) => {
    dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: loginPayload });
  },
  /* The `logout` function within the `authActions` object is a method that takes one parameter:
  `dispatch`. When this function is called, it dispatches an action with a type of `LOGOUT`. This
  action is typically used to handle the logout functionality in the application, such as clearing
  the user's authentication status or resetting user data in the state. */
  logout: (dispatch: any) => {
    dispatch({ type: actionTypes.LOGOUT });
  },
};

export default authActions;
