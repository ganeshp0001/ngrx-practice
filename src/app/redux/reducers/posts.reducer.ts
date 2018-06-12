import { Action } from '@ngrx/store';

export function postsReducer(state: string = 'Hello World', action: Action) {
    switch (action.type) {
        case 'HINDI':
            return "Namaste Sansar!";
        default:
            return "Hello world";
    }
}