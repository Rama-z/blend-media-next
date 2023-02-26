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

const getDetailPending = () => ({
  type: actionStrings.getDetail.concat("_", Pending),
});
const getDetailRejected = (error) => ({
  type: actionStrings.getDetail.concat("_", Rejected),
  payload: { error },
});
const getDetailFulfilled = (data) => ({
  type: actionStrings.getDetail.concat("_", Fulfilled),
  payload: { data },
});

const createProductPending = () => ({
  type: actionStrings.createProduct.concat("_", Pending),
});
const createProductRejected = (error) => ({
  type: actionStrings.createProduct.concat("_", Rejected),
  payload: { error },
});
const createProductFulfilled = (data) => ({
  type: actionStrings.createProduct.concat("_", Fulfilled),
  payload: { data },
});

const deleteProductPending = () => ({
  type: actionStrings.deleteProduct.concat("_", Pending),
});
const deleteProductRejected = (error) => ({
  type: actionStrings.deleteProduct.concat("_", Rejected),
  payload: { error },
});
const deleteProductFulfilled = (data) => ({
  type: actionStrings.deleteProduct.concat("_", Fulfilled),
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

const getDetailThunk = (id, cbSuccess) => {
  return async (dispatch) => {
    try {
      dispatch(getDetailPending());
      typeof cbLoading === "function" && cbLoading();
      const result = await getDetail(id);
      dispatch(getDetailFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(getDetailRejected(error));
      typeof cbDenied === "function" && cbDenied();
    }
  };
};

const createProductThunk = (body, token, cbSuccess) => {
  return async (dispatch) => {
    try {
      dispatch(createProductPending());
      typeof cbLoading === "function" && cbLoading();
      const result = await createProduct(body, token);
      dispatch(createProductFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(createProductRejected(error));
      typeof cbDenied === "function" && cbDenied();
    }
  };
};

const deleteProductThunk = (token, id, cbSuccess) => {
  return async (dispatch) => {
    try {
      dispatch(deleteProductPending());
      typeof cbLoading === "function" && cbLoading();
      const result = await deleteProduct(token, id);
      dispatch(deleteProductFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(deleteProductRejected(error));
      typeof cbDenied === "function" && cbDenied();
    }
  };
};

const profileAction = {
  getProfileThunk,
  editProfileThunk,
  getDetailThunk,
};

export default profileAction;
