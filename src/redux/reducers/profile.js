import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "../actions/actionStrings";

const initialState = {
  favorite: [],
  cart: [],
  profile: {},
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const profileReducer = (prevState = initialState, { payload, type }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { getProfile, editProfile } = actionStrings;
  switch (type) {
    case getProfile.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getProfile.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.message,
      };
    case getProfile.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        profile: payload.data.data,
      };

    case editProfile.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case editProfile.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.message,
      };
    case editProfile.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };

    // case getDetail.concat("_", Pending):
    //   return {
    //     ...prevState,
    //     isLoading: true,
    //     isError: false,
    //     isFulfilled: false,
    //   };
    // case getDetail.concat("_", Rejected):
    //   return {
    //     ...prevState,
    //     isLoading: false,
    //     isError: true,
    //     isFulfilled: false,
    //     err: payload.error.message,
    //   };
    // case getDetail.concat("_", Fulfilled):
    //   return {
    //     ...prevState,
    //     isLoading: false,
    //     isError: false,
    //     isFulfilled: true,
    //     detail: payload.data.data,
    //   };

    // case createProduct.concat("_", Pending):
    //   return {
    //     ...prevState,
    //     isLoading: true,
    //     isError: false,
    //     isFulfilled: false,
    //   };
    // case createProduct.concat("_", Rejected):
    //   return {
    //     ...prevState,
    //     isLoading: false,
    //     isError: true,
    //     isFulfilled: false,
    //     err: payload.error.message,
    //   };
    // case createProduct.concat("_", Fulfilled):
    //   return {
    //     ...prevState,
    //     isLoading: false,
    //     isError: false,
    //     isFulfilled: true,
    //   };

    // case deleteProduct.concat("_", Pending):
    //   return {
    //     ...prevState,
    //     isLoading: true,
    //     isError: false,
    //     isFulfilled: false,
    //   };
    // case deleteProduct.concat("_", Rejected):
    //   return {
    //     ...prevState,
    //     isLoading: false,
    //     isError: true,
    //     isFulfilled: false,
    //     err: payload.error.message,
    //   };
    // case deleteProduct.concat("_", Fulfilled):
    //   return {
    //     ...prevState,
    //     isLoading: false,
    //     isError: false,
    //     isFulfilled: true,
    //   };
    default:
      return prevState;
  }
};

export default profileReducer;
