import { createStore, applyMiddleware, compose } from "redux";
import { reducerContact } from "./reducers/Reducer"
import thunk from "redux-thunk";
export const store = createStore(
  reducerContact,compose(
    applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
