import { createStore, combineReducers, applyMiddleware } from "redux";
import tasks from "../modules/tasks";
import createSagaMiddleware from "redux-saga";
import helloSaga from "../sagas/saga";

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
  sagaMiddleware.run(helloSaga);
  return store;
};

export default configureStore;
