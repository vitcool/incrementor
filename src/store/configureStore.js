import { createStore, combineReducers, applyMiddleware } from "redux";
import tasks from "../modules/tasks";
import createSagaMiddleware from "redux-saga";
import watchFetchRequests from "../sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  tasks
});

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(watchFetchRequests);
  return store;
};

export default configureStore;
