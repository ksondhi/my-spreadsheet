
import { Workout } from './../models/workout.model';
import { Injectable, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class DataService implements OnInit {

  workouts: Observable<Workout[]>;

  constructor() {
   }

   ngOnInit() {
  //   this.workouts = this.store.select(store => this.store.workoutLogs);
   }

  getWorkouts(): void {
    // Make an http call here first.
 //   this.store.dispatch({ type: WorkoutsActions.LOAD_WORKOUTS, payload: WORKOUTS});
  }
}
