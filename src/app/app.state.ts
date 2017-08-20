import { Action, combineReducers } from '@ngrx/store';
import { IWorkoutState, workoutsReducer } from './reducers/workouts.reducer';

export interface IAppState {
    workoutState: IWorkoutState;
}

export function appReducers(state: IAppState, action: Action) {
      return combineReducers({workoutsReducer});
}

