import { IAppState } from './app.state';
import { Action, combineReducers } from '@ngrx/store';
import { IWorkoutState, workoutsReducer } from './reducers/workouts.reducer';
import { compose } from '@ngrx/core';

export interface IAppState {
    workoutState: IWorkoutState;
}

export const reducers = combineReducers({
    workoutsReducer: workoutsReducer,
});

export function appReducers(state: IAppState, action: Action) {
    return reducers(state, action);
}

