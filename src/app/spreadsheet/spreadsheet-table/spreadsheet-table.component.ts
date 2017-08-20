import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { IWorkoutState } from './../../reducers/workouts.reducer';
import { IAppState } from './../../app.state';

import { Workout } from './../../models/workout.model';
import { Component, OnInit } from '@angular/core';

import { OnClickEvent, OnRatingChangeEven } from 'angular-star-rating/star-rating-struct';

@Component({
  selector: 'app-spreadsheet-table',
  templateUrl: './spreadsheet-table.component.html',
  styleUrls: ['./spreadsheet-table.component.scss']
})
export class SpreadsheetTableComponent implements OnInit {

  workouts: Workout[];

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.store.select<IWorkoutState>('workoutsReducer').subscribe(workoutState => {
      console.log('State: ', workoutState);
      if (workoutState) {
        this.workouts = workoutState.workouts;
        console.log('The user is: ', workoutState.user);
      }
    });
  }

  onClick = ($event: OnClickEvent, log: Workout) => {
    log.rating = $event.rating;
  }

  onRatingChange = ($event: OnRatingChangeEven, workout: Workout) => {
    workout.rating = $event.rating;
  }
}

