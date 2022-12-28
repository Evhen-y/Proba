import { fork, all } from "redux-saga/effects";
import { todosWatcherSaga, } from "../../containers/todo/store/sagas";
import { usersWatcherSaga } from "../../containers/users/store/saga";
const allSagas = [todosWatcherSaga, usersWatcherSaga];

export default function* rootSags() {
  yield all(allSagas.map(fork));
}
