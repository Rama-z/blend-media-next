import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "../actions/actionStrings";

const initialState = {
  favorite: [],
  cart: [],
  transaction: {},
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const transactionReducer = (prevState = initialState, { payload, type }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { createTransaction } = actionStrings;
  switch (type) {
    case createTransaction.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case createTransaction.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.message,
      };
    case createTransaction.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        transaction: payload.data.data,
      };

    default:
      return prevState;
  }
};

export default transactionReducer;
