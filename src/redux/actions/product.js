import { ActionType } from "redux-promise-middleware";
import {
  getProduct,
  getDetail,
  createProduct,
  editProduct,
  deleteProduct,
} from "src/modules/api/product";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const getProductPending = () => ({
  type: actionStrings.getProduct.concat("_", Pending),
});
const getProductRejected = (error) => ({
  type: actionStrings.getProduct.concat("_", Rejected),
  payload: { error },
});
const getProductFulfilled = (data) => ({
  type: actionStrings.getProduct.concat("_", Fulfilled),
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

const editProductPending = () => ({
  type: actionStrings.editProduct.concat("_", Pending),
});
const editProductRejected = (error) => ({
  type: actionStrings.editProduct.concat("_", Rejected),
  payload: { error },
});
const editProductFulfilled = (data) => ({
  type: actionStrings.editProduct.concat("_", Fulfilled),
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

const getProductThunk = (params, cbSuccess) => {
  return async (dispatch) => {
    try {
      dispatch(getProductPending());
      typeof cbLoading === "function" && cbLoading();
      const result = await getProduct(params);
      dispatch(getProductFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(getProductRejected(error));
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

const editProductThunk = (body, token, id, cbSuccess) => {
  return async (dispatch) => {
    try {
      dispatch(editProductPending());
      typeof cbLoading === "function" && cbLoading();
      const result = await editProduct(body, token, id);
      dispatch(editProductFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(editProductRejected(error));
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

const productAction = {
  getProductThunk,
  getDetailThunk,
  createProductThunk,
  editProductThunk,
  deleteProductThunk,
};

export default productAction;
