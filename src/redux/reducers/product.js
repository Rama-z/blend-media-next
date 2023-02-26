import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "../actions/actionStrings";

const initialState = {
  product: [],
  detail: {},
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const productReducer = (prevState = initialState, { payload, type }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { createProduct, getProduct, getDetail, editProduct, deleteProduct } =
    actionStrings;
  switch (type) {
    case getProduct.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getProduct.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.message,
      };
    case getProduct.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        product: payload.data.data,
      };

    case getDetail.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getDetail.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.message,
      };
    case getDetail.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        detail: payload.data.data,
      };

    case createProduct.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case createProduct.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.message,
      };
    case createProduct.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };

    case editProduct.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case editProduct.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.message,
      };
    case editProduct.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };
    case deleteProduct.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case deleteProduct.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.message,
      };
    case deleteProduct.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };
    default:
      return prevState;
  }
};

export default productReducer;
