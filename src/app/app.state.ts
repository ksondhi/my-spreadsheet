import { combineReducers } from '@ngrx/store';
import { IWorkoutState, workoutsReducer } from './reducers/workouts.reducer';

export interface IAppState {
    workoutState: IWorkoutState;
}

export const appReducers = combineReducers({ workoutsReducer });
