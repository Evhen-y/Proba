import { takeLatest, call, put, delay } from "redux-saga/effects";
import { todosActions } from "./actions";
import { TodosActionsType } from "./constants";
function* fetchTodosSaga({ payload, cb }: ReturnType<any>) {
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
        id: 55,
        title: "Todods 0011111111111111111111111111111111111111111111111111111111111111111111",
        createAt: new Date(),
        completed: false,
      },
      {
        id: 556,
        title: "Todods 001",
        createAt: new Date(),
        completed: false,
      },
    ];
    console.log(todos);
    yield put(todosActions.FETCH_TODOS.SUCCESS(todos));
  } catch (err) {
    yield put(todosActions.FETCH_TODOS.FAILUR(err as Object));
  } finally {
    cb?.();
  }
}

function* fetchTodoSaga({ payload, cb }: ReturnType<any>) {
  try {
    const todo = [
      {
        id: 3,
        text: "Todods 003",
        createAt: new Date(),
        completed: false,
      },
    ];
    yield put(todosActions.FETCH_TODO.SUCCESS(todo));
  } catch (err) {
    yield put(todosActions.FETCH_TODO.FAILUR(err as Object));
  } finally {
    cb?.();
  }
}

function* addTodoSaga({ payload, cb }: ReturnType<any>) {
  try {
    const newTodo = [
      {
        id: 4,
        text: "Todods 004",
        createAt: new Date(),
        completed: false,
      },
    ];
    yield put(todosActions.ADD_TODO.SUCCESS(newTodo));
  } catch (err) {
    yield put(todosActions.ADD_TODO.FAILUR(err as Object));
  } finally {
    cb?.();
  }
}

function* editTodoSaga({ payload, cb }: ReturnType<any>) {
  try {
    const updateTodo = [
      {
        id: 44,
        text: "Todods 0044",
        createAt: new Date(),
        completed: false,
      },
    ];
    yield put(todosActions.EDIT_TODO.SUCCESS(updateTodo));
  } catch (err) {
    yield put(todosActions.EDIT_TODO.FAILUR(err as Object));
  } finally {
    cb?.();
  }
}

function* removeTodoSaga({ payload, cb }: ReturnType<any>) {
  try {
    yield put(todosActions.REMOVE_TODO.SUCCESS(payload));
  } catch (err) {
    yield put(todosActions.REMOVE_TODO.FAILUR(err as Object));
  } finally {
    cb?.();
  }
}
export const todosWatcherSaga = function* () {
  // @ts-ignore
  // yield delay (() => todosActions.FETCH_TODOS.REQUEST, fetchTodosSaga); делает задержку отправки запроса
  yield takeLatest(TodosActionsType.FETCH_TODOS.REQUEST, fetchTodosSaga);
  yield takeLatest(TodosActionsType.FETCH_TODO.REQUEST, fetchTodoSaga);
  yield takeLatest(TodosActionsType.ADD_TODO.REQUEST, addTodoSaga);
  yield takeLatest(TodosActionsType.EDIT_TODO.REQUEST, editTodoSaga);
  yield takeLatest(TodosActionsType.REMOVE_TODO.REQUEST, removeTodoSaga);
};
