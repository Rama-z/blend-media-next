import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import productReducer from "./product";
import profileReducer from "./profile";
import transactionReducer from "./transaction";

export default combineReducers({
  auth: authReducer,
  product: productReducer,
  profile: profileReducer,
  transaction: transactionReducer,
});
