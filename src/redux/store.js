import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userSlice } from "./slice/UserSlice";

const persistConfig = {
  key: "Disney",
  version: "2.0",
  storage,
};

const reducer = combineReducers({
  user: userSlice,
});

const persist = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persist,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    }),
    thunk,
  ],
});

export default store;
