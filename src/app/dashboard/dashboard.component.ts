import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HindiAction, EnglishAction } from '../redux/actions';

interface AppState {
  message: string;
}


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

  constructor(private store: Store<AppState> ){
    this.message$ = this.store.select('message');
  }

  hindiMsg(){
    this.store.dispatch(new HindiAction());
  }

  englishMsg(){
    this.store.dispatch(new EnglishAction());
  }

}
