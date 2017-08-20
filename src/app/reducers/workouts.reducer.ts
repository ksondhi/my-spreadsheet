import { IWorkoutState } from './workouts.reducer';
import { LOAD_WORKOUTS, SAVE_WORKOUT, FETCH_WORKOUT } from './../actions/workout.action';
import { Action } from '@ngrx/store';
import { Workout } from './../models/workout.model';
import { WORKOUTS } from './../mock-data/mock-workouts';

export interface IWorkoutState {
    readonly workouts: Workout[];
    readonly user: string;
}

export const initialState: IWorkoutState = {
    workouts: WORKOUTS,
    user: 'kabir.sondhi',
};

export function workoutsReducer (state: IWorkoutState = initialState, action: Action) {
    switch (action.type) {
        case LOAD_WORKOUTS:
            return Object.assign({}, state);
        case SAVE_WORKOUT:
            return Object.assign({}, state, action.payload);
        case FETCH_WORKOUT:
            return Object.assign({}, state.workouts.find(workout => workout.workoutId === action.payload.workoutId));
        default:
            console.log('The state is ', state);
            return state;
    }
}

