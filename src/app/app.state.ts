import { Action, combineReducers } from '@ngrx/store';
import { IWorkoutState, workoutsReducer } from './reducers/workouts.reducer';
import { compose } from '@ngrx/core';

export interface IAppState {
    workoutState: IWorkoutState;
}

export const appReducers = combineReducers({
    workoutsReducer
});

