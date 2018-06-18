import { ActionReducerMap } from '@ngrx/store';
import { postsReducer } from './posts.reducer';
import { usersReducer } from './users.reducer';
import { AppState } from '../../models';

export const reducers: ActionReducerMap<AppState> = {
    message: postsReducer,
    usersState: usersReducer
}