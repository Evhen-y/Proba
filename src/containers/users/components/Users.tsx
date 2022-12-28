import React, { useState } from "react";

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
  const [users, setUsers] = useState<IUsers[]>([
    {
      id: 1,
      name: "Seg",
      lastName: "Suoer",
      email: "zz@gmail.com",
      avatar: null,
      createAt: new Date(),
      isActive: true,
    },
  ]);

  return (
    <div>
      {users?.map(({ name, lastName, id }) => (
        <React.Fragment key={id}>
          {" "}
          {name} {lastName}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Users;
