import { ActionType } from "redux-promise-middleware";
import { createTransaction } from "src/modules/api/transaction";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const createTransactionPending = () => ({
  type: actionStrings.createTransaction.concat("_", Pending),
});
const createTransactionRejected = (error) => ({
  type: actionStrings.createTransaction.concat("_", Rejected),
  payload: { error },
});
const createTransactionFulfilled = (data) => ({
  type: actionStrings.createTransaction.concat("_", Fulfilled),
  payload: { data },
});

const createTransactionThunk = (body, token, cbSuccess) => {
  return async (dispatch) => {
    try {
      dispatch(createTransactionPending());
      typeof cbLoading === "function" && cbLoading();
      const result = await createTransaction(body, token);
      dispatch(createTransactionFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(createTransactionRejected(error));
      typeof cbDenied === "function" && cbDenied();
    }
  };
};

const transactionAction = {
  createTransactionThunk,
};

export default transactionAction;
