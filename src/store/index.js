import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducers/appReducer";

const rootReducer = combineReducers({
  app : appReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
