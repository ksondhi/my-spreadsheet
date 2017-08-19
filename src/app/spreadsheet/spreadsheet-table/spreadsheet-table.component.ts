import { Store } from '@ngrx/store';
import { IAppState } from './../../reducers/workouts.reducer';

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
    console.log('about to call select');
    this.store.select(state => state).subscribe(state => {
      console.log('Workouts: ', state);
      this.workouts = state.workouts;
    });
  }

  onClick = ($event: OnClickEvent, log: Workout) => {
    log.rating = $event.rating;
  }

  onRatingChange = ($event: OnRatingChangeEven, workout: Workout) => {
    workout.rating = $event.rating;
  }
}

