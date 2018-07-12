import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AppActions from '../actions';
import { CarsService } from '../../cars.service';
import {Car} from '../../models';

@Injectable()
export class CarsEffects {
    constructor(private actions$: Actions, private carsService: CarsService) { }

    @Effect()
    loadCars$ = this.actions$.ofType(AppActions.LOAD_CARS)
        .pipe(
            switchMap(() => {
                return this.carsService.getCars().pipe(
                    map((result: any) => {
                        let carArr: Array<Car> = [];
                        result.data.forEach(car => {
                            carArr.push({id: car.id, name: car.name, year: car.year, color: car.color, value: car.pantone_value});
                        });
                        return new AppActions.LoadCarsSuccessAction({cars: carArr});
                    }),
                    catchError( error => of(new AppActions.LoadCarsFailedAction(error)))
                )
            })
        )
}