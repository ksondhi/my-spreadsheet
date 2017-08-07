import { WORKOUT_LOGS } from './../mock-data/mock-workout-logs';
import { WorkoutLog } from './../models/workout-log';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class WorkoutJournalService {

  constructor() {
   }

  getWorkoutLogs(): Observable<WorkoutLog[]> {
    return Observable.of(WORKOUT_LOGS).delay(1000);
  }
}
