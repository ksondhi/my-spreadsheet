import { LOAD_WORKOUTS, SAVE_WORKOUT, FETCH_WORKOUT } from './../actions/workout.action';
import { Action } from '@ngrx/store';
import { Workout } from './../models/workout.model';
import { WORKOUTS } from './../mock-data/mock-workouts';

export interface IAppState {
    readonly workouts: Workout[];
}

export const initialState: IAppState = {
    workouts: WORKOUTS,
};

export function workoutsReducer (state: IAppState = initialState, action: Action) {
    console.log('In reducer with state: ', state);
    switch (action.type) {
        case LOAD_WORKOUTS:
            return Object.assign({}, state.workouts);
        case SAVE_WORKOUT:
            return Object.assign({}, state, action.payload);
        case FETCH_WORKOUT:
            return Object.assign({}, state.workouts.find(workout => workout.workoutId === action.payload.workoutId));
        default:
            console.log('about to return state: ', state);
            return state;
    }
}

