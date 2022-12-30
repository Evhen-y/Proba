import  {ROUTER_PATH}  from "./constansPath";
import { TodosContainer, UsersContaiter } from "../containers";

export const privateRouter = (userRole: string) =>
    [
        {
            path: ROUTER_PATH.TODOS,
            exact: true,
            component: TodosContainer,
            children: [],
            icon: "",
            label: "",
            acl: ["ADMIN"],
        },
        {
            path: ROUTER_PATH.USERS,
            exact: true,
            component: UsersContaiter,
            children: [],
            icon: "",
            label: "",
            acl: ["ADMIN"],
        },
     // @ts-ignore
    ].filter((route) => route.acl.includes(userRole) || !route.acl.length);