import { IWorkoutState, workoutsReducer } from './reducers/workouts.reducer';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

export interface IAppState {
    workoutState: IWorkoutState;
}