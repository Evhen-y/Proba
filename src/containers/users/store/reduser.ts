import { Reducer as IReduser } from "redux";
import { IUsersState } from "./interface";
import { UsersActionsType } from "./constans";

const initionStateUser: IUsersState = {
  error: null,
  loading: false,
  users: [],
  user: null,
  // userFilterSettings: {
  //     search: "",
  //     order: EOrder.ASC,
  //     sortBy: "createAt",
  // },
};
export const usersRedusers: IReduser = (state: IUsersState = initionStateUser, actions) => {
  switch (actions.type) {
    case UsersActionsType.FETCH_USERS.REQUEST:
    case UsersActionsType.FETCH_USER.REQUEST:
    case UsersActionsType.ADD_USER.REQUEST:
    case UsersActionsType.EDIT_USER.REQUEST:
    case UsersActionsType.REMOVE_USER.REQUEST:
      return { ...state, loading: true };

    case UsersActionsType.FETCH_USERS.SUCCESS:
      return { ...state, loading: false, users: actions.payload };

    case UsersActionsType.FETCH_USER.SUCCESS:
      return { ...state, loading: false, user: actions.payload };

    case UsersActionsType.ADD_USER.SUCCESS:
      return { ...state, loading: false, users: [...state.users].concat(actions.payload) };

    case UsersActionsType.EDIT_USER.SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users].map((user) => (user.id === actions.payload ? actions.payload : user)),
      };

    case UsersActionsType.REMOVE_USER.SUCCESS:
      return { ...state, loading: false, users: [...state.users].filter((user) => user.id !== actions.payload) };

    case UsersActionsType.FETCH_USERS.FAILURE:
    case UsersActionsType.FETCH_USER.FAILURE:
    case UsersActionsType.ADD_USER.FAILURE:
    case UsersActionsType.EDIT_USER.FAILURE:
    case UsersActionsType.REMOVE_USER.FAILURE:
      return { ...state, loading: false, error: actions.payload };
    default:
      return state;
  }
};
