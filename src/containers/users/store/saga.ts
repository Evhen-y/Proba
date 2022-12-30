import { takeLatest, put, call } from "redux-saga/effects";
import { usersActions, UsersActionsType } from "../store";

function* fetchUsersSaga({ payload, cb }: ReturnType<any>) {
  try {
    const users = [
      {
        id: 1,
        name: "Zhenya",
        lastName: "Ilushchenko",
        avatar: null,
        email: "qq@gmail.com",
        createAt: new Date(),
        isActive: false,
      },
      {
        id: 2,
        name: "olya",
        lastName: "Girl",
        avatar: null,
        email: "qqq@gmail.com",
        createAt: new Date(),
        isActive: false,
      },
    ];
    yield put(usersActions.FETCH_USERS.SUCCESS(users));
  } catch (err) {
    yield put(usersActions.FETCH_USERS.FAILUR(err as Object));
  } finally {
    cb?.();
  }
}

function* fetchUserSaga({ payload, cb }: ReturnType<any>) {
  try {
    const user = [
      {
        id: 3,
        name: "SSSS",
        lastName: "IlushchenkoSSSS",
        avatar: null,
        email: "qasq@gmail.com",
        createAt: new Date(),
        isActive: false,
      },
    ];
    yield put(usersActions.FETCH_USER.SUCCESS(user));
  } catch (err) {
    yield put(usersActions.FETCH_USER.FAILUR(err as Object));
  } finally {
    cb?.();
  }
}

function* addUsersSaga({ payload, cb }: ReturnType<any>) {
  try {
    const newUser = [
      {
        id: 4,
        name: "QQQQQQ",
        lastName: "IlushchenkoSSSSQQQQ",
        avatar: null,
        email: "DSSAAqasq@gmail.com",
        createAt: new Date(),
        isActive: false,
      },
    ];
    yield put(usersActions.ADD_USER.SUCCESS(newUser));
  } catch (err) {
    yield put(usersActions.ADD_USER.FAILUR(err as Object));
  } finally {
    cb?.();
  }
}

function* editUsersSaga({ payload, cb }: ReturnType<any>) {
  try {
    const updateUser = [
      {
        id: 5,
        name: "QQQQQQzczsc",
        lastName: "IlushchenkoSSSSQQQQzcszcsz",
        avatar: null,
        email: "DSSAAqasq@gmail.com",
        createAt: new Date(),
        isActive: false,
      },
    ];
    yield put(usersActions.EDIT_USER.SUCCESS(updateUser));
  } catch (err) {
    yield put(usersActions.EDIT_USER.FAILUR(err as Object));
  } finally {
    cb?.();
  }
}

function* removeUsersSaga({ payload, cb }: ReturnType<any>) {
  try {
    yield put(usersActions.REMOVE_USER.SUCCESS(payload));
  } catch (err) {
    yield put(usersActions.REMOVE_USER.FAILUR(err as Object));
  } finally {
    cb?.();
  }
}
export const usersWatcherSaga = function* () {
  yield takeLatest(UsersActionsType.FETCH_USERS.REQUEST, fetchUsersSaga);
  yield takeLatest(UsersActionsType.FETCH_USER.REQUEST, fetchUserSaga);
  yield takeLatest(UsersActionsType.EDIT_USER.REQUEST, editUsersSaga);
  yield takeLatest(UsersActionsType.ADD_USER.REQUEST, addUsersSaga);
  yield takeLatest(UsersActionsType.REMOVE_USER.REQUEST, removeUsersSaga);
};
