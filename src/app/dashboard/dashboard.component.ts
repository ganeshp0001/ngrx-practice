import { Component } from '@angular/core';

import { Store, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';

import { HindiAction, EnglishAction, LoadUsersAction, LoadCarsAction} from '../redux/actions';
import * as selectors from '../redux/reducers/users.reducer';
import {AppState, User, UserState} from '../models';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];

  message$ :Observable<string>;
  users$ : Observable<User[]>;

  constructor(private store: Store<AppState> ){
    this.message$ = this.store.select('message');
    this.users$   = this.store.select(selectors.getUsers);
    // this.store.select(selectors.getUsers).subscribe( state => {
    //   console.log('SELECTOR GOT', state);
    // })
    this.store.dispatch(new LoadUsersAction());
    this.store.dispatch(new LoadCarsAction());
    console.log(this.users$);
  }

  hindiMsg(){
    this.store.dispatch(new HindiAction());
  }

  englishMsg(){
    this.store.dispatch(new EnglishAction());
  }

}
