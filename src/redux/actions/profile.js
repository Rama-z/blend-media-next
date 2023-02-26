import { ActionType } from "redux-promise-middleware";
import { getProfile, editProfile } from "src/modules/api/profile";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const getProfilePending = () => ({
  type: actionStrings.getProfile.concat("_", Pending),
});
const getProfileRejected = (error) => ({
  type: actionStrings.getProfile.concat("_", Rejected),
  payload: { error },
});
const getProfileFulfilled = (data) => ({
  type: actionStrings.getProfile.concat("_", Fulfilled),
  payload: { data },
});

const editProfilePending = () => ({
  type: actionStrings.editProfile.concat("_", Pending),
});
const editProfileRejected = (error) => ({
  type: actionStrings.editProfile.concat("_", Rejected),
  payload: { error },
});
const editProfileFulfilled = (data) => ({
  type: actionStrings.editProfile.concat("_", Fulfilled),
  payload: { data },
});

const addToCart = (data) => ({
  type: actionStrings.addToCart.concat("_", Fulfilled),
  payload: { data },
});

const addToFavorite = (data) => ({
  type: actionStrings.addToFavorite.concat("_", Fulfilled),
  payload: { data },
});

const deleteFromCart = (data) => ({
  type: actionStrings.deleteFromCart.concat("_", Fulfilled),
  payload: { data },
});

const deleteFromFavorite = (data) => ({
  type: actionStrings.deleteFromFavorite.concat("_", Fulfilled),
  payload: { data },
});

const getProfileThunk = (token, cbSuccess) => {
  return async (dispatch) => {
    try {
      dispatch(getProfilePending());
      typeof cbLoading === "function" && cbLoading();
      const result = await getProfile(token);
      dispatch(getProfileFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(getProfileRejected(error));
      typeof cbDenied === "function" && cbDenied();
    }
  };
};

const editProfileThunk = (body, token, cbSuccess) => {
  return async (dispatch) => {
    try {
      dispatch(editProfilePending());
      typeof cbLoading === "function" && cbLoading();
      const result = await editProfile(body, token);
      dispatch(editProfileFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(editProfileRejected(error));
      typeof cbDenied === "function" && cbDenied();
    }
  };
};

const profileAction = {
  getProfileThunk,
  editProfileThunk,
  addToCart,
  addToFavorite,
  deleteFromCart,
  deleteFromFavorite,
};

export default profileAction;
