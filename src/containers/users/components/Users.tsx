import React, { useState, } from "react";
import { useSelector ,useDispatch } from "react-redux"
import {getUserFilterSetings, getUsers, getUserFilter} from "../store/selector"
import {usersActions} from "../store"
import {IUser} from "../store"

export interface IUsers {
  id?: number;
  name: string;
  lastName: string;
  email: string;
  avatar: string | null;
  createAt: Date;
  isActive: boolean;
}
const Users = () => {
    const [serchUser, setSerchUser]= useState("")

    const users :IUser[] = useSelector(getUserFilter());
    const FilterSelect = useSelector(getUserFilterSetings())

  // const [users, setUsers] = useState<IUsers[]>(
  // //     [
  // //   {
  // //     id: 1,
  // //     name: "Seg",
  // //     lastName: "Suoer",
  // //     email: "zz@gmail.com",
  // //     avatar: null,
  // //     createAt: new Date(),
  // //     isActive: true,
  // //   },
  // // ]
  // );



   const dispatch = useDispatch()
 const handlFilterUsers = () => {
  dispatch(usersActions.USER_FILTER.REQUEST({...FilterSelect, search: serchUser}))
 }
  return (
    <div>
        <div>
            <input value={serchUser} type="text" onChange={(e)=> setSerchUser(e.target.value)}/>
            <button onClick={handlFilterUsers}>Filter</button>
        </div>

      {users?.map(({ name, lastName, id }) => (
        <React.Fragment key={id}>

          {name} {lastName}
        </React.Fragment>
      ))}


    </div>
  );
};

export default Users;
