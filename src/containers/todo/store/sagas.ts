import { takeLatest, call, put } from "redux-saga/effects";
import { todosActions } from "./actions";

function* fetchTodosSaga({ payload, cb }: ReturnType<typeof todosActions.FETCH_TODOS.REQUEST>) {
  try {
    const todos = [
      {
        id: 1,
        title: "Todods 001",
        createAt: new Date(),
        completed: false,
      },
      {
        id: 2,
        title: "Todods 002",
        createAt: new Date(),
        completed: false,
      },
      {
        id: 1,
        title: "Todods 0011111111111111111111111111111111111111111111111111111111111111111111",
        createAt: new Date(),
        completed: false,
      },
      {
        id: 1,
        title: "Todods 001",
        createAt: new Date(),
        completed: false,
      },
    ];
    yield put(todosActions.FETCH_TODOS.SECCESS(todos));
  } catch (err) {
    yield put(todosActions.FETCH_TODOS.FAILUR(err as Object));
  } finally {
    cb?.();
  }
}

function* fetchTodoSaga({ payload, cb }: ReturnType<typeof todosActions.FETCH_TODO.REQUEST>) {
  try {
    const todo = [
      {
        id: 3,
        text: "Todods 003",
        createAt: new Date(),
        completed: false,
      },
    ];
    yield put(todosActions.FETCH_TODO.SECCESS(todo));
  } catch (err) {
    yield put(todosActions.FETCH_TODO.FAILUR(err as Object));
  } finally {
    cb?.();
  }
}

function* addTodoSaga({ payload, cb }: ReturnType<typeof todosActions.ADD_TODO.REQUEST>) {
  try {
    const newTodo = [
      {
        id: 4,
        text: "Todods 004",
        createAt: new Date(),
        completed: false,
      },
    ];
    yield put(todosActions.ADD_TODO.SECCESS(newTodo));
  } catch (err) {
    yield put(todosActions.ADD_TODO.FAILUR(err as Object));
  } finally {
    cb?.();
  }
}

function* editTodoSaga({ payload, cb }: ReturnType<typeof todosActions.EDIT_TODO.REQUEST>) {
  try {
    const updateTodo = [
      {
        id: 44,
        text: "Todods 0044",
        createAt: new Date(),
        completed: false,
      },
    ];
    yield put(todosActions.EDIT_TODO.SECCESS(updateTodo));
  } catch (err) {
    yield put(todosActions.EDIT_TODO.FAILUR(err as Object));
  } finally {
    cb?.();
  }
}

function* removeTodoSaga({ payload, cb }: ReturnType<typeof todosActions.REMOVE_TODO.REQUEST>) {
  try {
    yield put(todosActions.REMOVE_TODO.SECCESS(payload));
  } catch (err) {
    yield put(todosActions.REMOVE_TODO.FAILUR(err as Object));
  } finally {
    cb?.();
  }
}
export const todosWatcherSaga = function* () {
  yield takeLatest(todosActions.FETCH_TODOS.REQUEST, fetchTodosSaga);
  yield takeLatest(todosActions.FETCH_TODO.REQUEST, fetchTodoSaga);
  yield takeLatest(todosActions.ADD_TODO.REQUEST, addTodoSaga);
  yield takeLatest(todosActions.EDIT_TODO.REQUEST, editTodoSaga);
  yield takeLatest(todosActions.REMOVE_TODO.REQUEST, removeTodoSaga);
};
