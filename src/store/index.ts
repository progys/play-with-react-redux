import { createStore, applyMiddleware } from "redux";
import { thunk as thunkMiddleware } from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers/root";

const loggerMiddleware = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware) as any);

export default store;