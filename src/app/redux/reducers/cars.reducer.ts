import {EntityAdapter, createEntityAdapter, EntityState} from '@ngrx/entity';
import { CarState, Car} from '../../models';
import * as AppActions from '../actions';

const adapter: EntityAdapter<Car> = createEntityAdapter<Car>();

const initialState: CarState = adapter.getInitialState({
    loaded: false,
    loading: false,
});

export const carsReducer = (state: CarState = initialState, action: AppActions.CarActions): CarState => {
    switch (action.type) {
        case AppActions.LOAD_CARS:
            return {...state, loading: true};
        case AppActions.LOAD_CARS_SUCCESS:
            return adapter.addAll(action.payload.cars, state);
            case AppActions.LOAD_CARS_SUCCESS:
            return {...state, loading: false, loaded: false, };
        default:
            return state;
    }
}



