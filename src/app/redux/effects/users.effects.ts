import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { LOAD_USERS, LoadUsersSuccessAction, LoadUsersFailedAction } from '../actions';
import { UsersServiceService } from '../../users-service.service';
import {User} from '../../models';

@Injectable()
export class UsersEffects {
    constructor(private actions$: Actions, private userService: UsersServiceService) { }

    @Effect()
    loadUsers$ = this.actions$.ofType(LOAD_USERS)
        .pipe(
            switchMap(() => {
                return this.userService.getUsers().pipe(
                    map((result: any) => {
                        let userArr: Array<User> = [];
                        result.data.forEach(user => {
                            userArr.push({id: user.id, firstName: user.first_name, lastName: user.last_name, avatar: user.avatar});
                        });
                        return new LoadUsersSuccessAction(userArr);
                    }),
                    catchError( error => of(new LoadUsersFailedAction(error)))
                )
            })
        )
}