export interface ITodosState {
  todos: ITodo[];
  loading: boolean;
  error: string | null;
  todo: ITodo | null;
}

export interface ITodo {
  id?: number;
  text: string;
  createAt: Date;
  completed: boolean;
}
