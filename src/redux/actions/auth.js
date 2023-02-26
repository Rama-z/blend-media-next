import { ActionType } from "redux-promise-middleware";
import { login, logout, register } from "src/modules/api/auth";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const loginPending = () => ({
  type: actionStrings.authLogin.concat("_", Pending),
});
const loginRejected = (error) => ({
  type: actionStrings.authLogin.concat("_", Rejected),
  payload: { error },
});
const loginFulfilled = (data) => ({
  type: actionStrings.authLogin.concat("_", Fulfilled),
  payload: { data },
});

const logoutPending = () => ({
  type: actionStrings.authLogout.concat("_", Pending),
});
const logoutRejected = (error) => ({
  type: actionStrings.authLogout.concat("_", Rejected),
  payload: { error },
});
const logoutFulfilled = (data) => ({
  type: actionStrings.authLogout.concat("_", Fulfilled),
  payload: { data },
});

const registerPending = () => ({
  type: actionStrings.authRegister.concat("_", Pending),
});
const registerRejected = (error) => ({
  type: actionStrings.authRegister.concat("_", Rejected),
  payload: { error },
});
const registerFulfilled = (data) => ({
  type: actionStrings.authRegister.concat("_", Fulfilled),
  payload: { data },
});

const loginThunk = (body, cbSuccess) => {
  return async (dispatch) => {
    try {
      dispatch(loginPending());
      typeof cbLoading === "function" && cbLoading();
      const result = await login(body);
      dispatch(loginFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(loginRejected(error));
      typeof cbDenied === "function" && cbDenied();
    }
  };
};

const logoutThunk = (token, cbSuccess) => {
  return async (dispatch) => {
    try {
      dispatch(logoutPending());
      const result = await logout(token);
      dispatch(logoutFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(logoutRejected(error));
      typeof cbDenied === "function" && cbDenied();
    }
  };
};

const registerThunk = (body, cbSuccess) => {
  return async (dispatch) => {
    try {
      dispatch(registerPending());
      typeof cbLoading === "function" && cbLoading();
      const result = await register(body);
      dispatch(registerFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(registerRejected(error));
      typeof cbDenied === "function" && cbDenied();
    }
  };
};

const authAction = {
  loginThunk,
  logoutThunk,
  registerThunk,
};

export default authAction;
