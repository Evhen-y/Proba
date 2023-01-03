
export enum EOrder {
  ASC = "ASC",
  DESC = "DESC",
}

export interface IFilterSettings {
  sortBy: keyof ITodo;
  search: string;
  order: EOrder;
}

export interface ITodosState {
  todos: ITodo[];
  loading: boolean;
  error: string | null;
  todo: ITodo | null;
  filterSettings: IFilterSettings;
}

export interface ITodo {
  id?: number;
  title: string;
  createAt: Date;
  completed: boolean;
}
