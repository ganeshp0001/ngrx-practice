import {EntityState} from '@ngrx/entity';

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

export interface Car {
  id: number;
  name: string;
  year: number;
  color: string;
  value: string;
}

export interface CarState extends EntityState<Car> {
    loaded: boolean;
    loading: boolean;
}

export interface AppState {
    message: string;
    usersState: UserState;
    carsState: CarState;
  }
  