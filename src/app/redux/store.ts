import { Store, combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { searchSlice } from "./slices/searchSlice";

const reducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [searchSlice.name]: searchSlice.reducer,
});
export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
