import React from "react";
import { ITodos } from "../Todos/Todos";

const Todo = ({ id, text }: Partial<ITodos>) => <div key={id}>{text}</div>;

export default Todo;
