import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { statisticsAPI } from "./APIs/statisticsAPI";
import accessTokenReducer from "./slicers/accessTokenSlicer";
import usernameReducer from "./slicers/usernameSlicer";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/src/getDefaultMiddleware";

const combinedReducer = combineReducers({
  [statisticsAPI.reducerPath]: statisticsAPI.reducer,
  accessToken: accessTokenReducer,
  username: usernameReducer,
});

const reducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware<any>) =>
      getDefaultMiddleware().concat(statisticsAPI.middleware),
  } as any);

export const wrapper = createWrapper(makeStore, { debug: true });
