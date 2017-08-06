import { WORKOUT_LOGS } from './../mock-data/mock-workout-logs';
import { WorkoutLog } from './../models/workout-log';
import { Injectable } from '@angular/core';

@Injectable()
export class WorkoutJournalService {

  constructor() {
   }

  getWorkoutLogs(): WorkoutLog[] {
    return WORKOUT_LOGS;
  }
}
