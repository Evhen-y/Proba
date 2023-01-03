import { combineReducers, CombinedState, AnyAction, Reducer } from "redux";
import { History, createBrowserHistory } from "history";
import { todosReduser, usersReduser } from "../../../src/containers";
import { connectRouter, RouterState } from "connected-react-router";
import { ITodosState, IUsersState } from "../../containers";
import { IAppState } from "@shared/interface";

//

export const history = createBrowserHistory();
type TReduser = CombinedState<IAppState>;

type TRootReduser =
  | CombinedState<{
      todosReduser: ITodosState;
      usersReduser: IUsersState;

      router: RouterState<unknown>;
    }>
  | undefined;
export default (history: History) => {
  const rootReduser = combineReducers({
    todosReduser,
    usersReduser,
    router: connectRouter(history),
  });
  return (state: TReduser | undefined, action: AnyAction) => {
    return rootReduser(state as TRootReduser, action);
  };
};
