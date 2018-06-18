import { Action } from '@ngrx/store';

import {User} from '../../models';

export class HindiAction implements Action{
    type: string = "HINDI";
}

export class EnglishAction implements Action{
    type: string = "ENGLISH";
}


export const LOAD_USERS = "LOAD_USERS";
export const LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS";
export const LOAD_USERS_FAILED = "LOAD_USERS_FAILED";

export class LoadUsersAction implements Action{
    readonly type = LOAD_USERS;
}

export class LoadUsersSuccessAction implements Action{
    readonly type = LOAD_USERS_SUCCESS;
    constructor(public payload: Array<User>) {}
}

export class LoadUsersFailedAction implements Action{
    readonly type = LOAD_USERS_FAILED;
    constructor(public payload: any) {}
}


export type UserActions = LoadUsersAction | LoadUsersSuccessAction | LoadUsersFailedAction;