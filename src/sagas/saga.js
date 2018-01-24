import { take, fork, call, put } from "redux-saga/effects";

const url = 'https://jsonplaceholder.typicode.com/users';

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
    const data = yield call(fetch, url);
  
    yield put({
      type: 'INCREMENT_SUCCESS',
      data
    });
  }
