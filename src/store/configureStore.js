import { createStore, combineReducers } from "redux";
import tasks from "../modules/tasks";

const configureStore = initialState => {
  const rootReducer = combineReducers({
    tasks
  });
  return createStore(rootReducer, initialState);
};

export default configureStore;
