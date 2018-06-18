
export interface User {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
}

export interface UserState {
    users: Array<User>;
    loaded: boolean;
    loading: boolean;
}

export interface AppState {
    message: string;
    usersState: UserState;
  }

