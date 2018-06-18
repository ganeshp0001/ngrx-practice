import { Store, createSelector, createFeatureSelector } from '@ngrx/store';

import {UserState} from '../../models';
import * as AppActions from '../actions';

export const initialState: UserState = {
    users: [],
    loaded: false,
    loading: false
}

export const usersReducer = (state: UserState = initialState, action: AppActions.UserActions): UserState => {
    switch (action.type) {
        case AppActions.LOAD_USERS:
            return {...state, loading: true};
        case AppActions.LOAD_USERS_SUCCESS:
            return {...state, loading: false, loaded: true, users: action.payload };
            case AppActions.LOAD_USERS_SUCCESS:
            return {...state, loading: false, loaded: false, };
        default:
            return state;
    }
}



export const userListReducer = (state: UserState) => state.users;
export const userLoadingReducer = (state: UserState) => state.loading;
export const userLoadedReducer = (state: UserState) => state.loaded;

export const getUsersState = createFeatureSelector<UserState>('usersState');
export const getUsers  = createSelector(getUsersState, userListReducer);
export const getUsersLoading  = createSelector(getUsersState, userLoadingReducer);
export const getUsersLoaded  = createSelector(getUsersState, userLoadedReducer);
