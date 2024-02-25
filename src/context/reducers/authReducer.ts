import * as actionTypes from '../actions/actions';
import StorageUtils, { KEYS } from '../../utils/storage';
const user = StorageUtils.getStorage(KEYS.user);

type ActionType = {
  type: string;
  payload: object;
};

type ResultType = {
  token: string;
  isAuthenticated: boolean;
};

const defaultState = {
  isAuthenticated: false,
};

export const initialState = user || defaultState;

export const AuthReducer = (state = initialState, action: ActionType) => {
  let result: ResultType;
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      result = {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
      StorageUtils.setStorage(KEYS.user, {
        ...initialState,
        ...result,
        token: result?.token,
        isAuthenticated: result?.isAuthenticated,
      });
      return result;

    case actionTypes.LOGOUT:
      StorageUtils.setStorage(KEYS.user, defaultState);
      return defaultState;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
