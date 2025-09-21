import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import config from "./config";

const reducers = combineReducers({
  config: persistReducer(
    {
      key: "config",
      storage,
    },
    config
  ),
});

export default reducers;
