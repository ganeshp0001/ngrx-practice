import { Action } from '@ngrx/store';

export class HindiAction implements Action{
    type: string = "HINDI";
    // payload: any = {
    //     text: "Hum aapke hai kon!?"
    // }
}

export class EnglishAction implements Action{
    type: string = "ENGLISH";
    // payload: any = {
    //     text: "Hio chuio!"
    // }
}
