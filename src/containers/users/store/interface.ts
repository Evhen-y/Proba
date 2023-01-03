
 enum EOrder{
    ASC= "ASC",
    DESC= "DESC",
}
export interface IUser {
  id?: number;
  name: string;
  lastName: string;
  email: string;
  avatar: string | null;
  createAt: Date;
  isActive: boolean;
}

export interface IUserFilterSettings {
    search: string;
    order: EOrder;
    sortBy: keyof IUser;
    limit: number;
    skip: number;
}

export interface IUsersState {
  users: IUser[];
  error: null | string;
  loading: boolean;
  user: IUser | null;
  userFilterSettings: IUserFilterSettings;
}
