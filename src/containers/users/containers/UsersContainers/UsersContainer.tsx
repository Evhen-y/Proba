import React from "react";
import { Users } from "../../components";
import { ReactChildren } from "react";
import { IUsers } from "../../components/Users";

interface IUsersContainer {
  children?: ReactChildren;
}
const UsersContaiter = (props: IUsersContainer) => {
  return (
    <div>
      <Users />
    </div>
  );
};

export default UsersContaiter;
