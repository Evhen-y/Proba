import React from "react";
import { ITodo } from "../../store/interface";

const Todo = ({ id, title }: Partial<ITodo>) => <div key={id}>{title}</div>;

export default Todo;
