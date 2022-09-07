import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginAPI } from "./APIs/loginAPI";
import { statisticsApi } from "./APIs/statisticsAPI";
import accessTokenReducer from "./slicers/accessTokenSlicer";
import usernameReducer from "./slicers/usernameSlicer";
import openModalReducer from "./slicers/openModalSlicer";
import filterReducer from "./slicers/filterSlicer";
import dataReducer from "./slicers/dataSlicer";
import formParametersReducer from "./slicers/formParametersSlicer";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/src/getDefaultMiddleware";

const combinedReducer = combineReducers({
  [loginAPI.reducerPath]: loginAPI.reducer,
  [statisticsApi.reducerPath]: statisticsApi.reducer,
  accessToken: accessTokenReducer,
  username: usernameReducer,
  openModal: openModalReducer,
  filter: filterReducer,
  data: dataReducer,
  formParameters: formParametersReducer,
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
      getDefaultMiddleware()
        .concat(loginAPI.middleware)
        .concat(statisticsApi.middleware),
  } as any);

export const wrapper = createWrapper(makeStore, { debug: true });
