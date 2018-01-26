import { take, fork, call, put } from "redux-saga/effects";

const url = "https://jsonplaceholder.typicode.com/users";

// The watcher: watch actions and coordinate worker tasks
export default function* watchFetchRequests() {
  while (true) {
    while (true) {
      const action = yield take("INCREMENT");
      yield fork(fetchUrl, url);
    }
  }
}

// The worker: perform the requested task
function* fetchUrl(url) {
  const response = yield call(testReq, url);
  yield put({
    type: "INCREMENT_SUCCESS",
    response
  });
}

const testReq = url => {
  return fetch(url)
    .then(response => response.json())
    .catch(error => error)
    .then(data => data);
};
