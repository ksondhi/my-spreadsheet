import { WorkoutLog } from '../models/workout-log';
import { WorkoutJournalService } from './../workout/workout-journal.service';
import { Component, OnInit } from '@angular/core';

import { IStarRatingOnClickEvent, IStarRatingOnRatingChangeEven } from 'angular-star-rating/star-rating-struct';

@Component({
  selector: 'app-spreadsheet-table',
  templateUrl: './spreadsheet-table.component.html',
  styleUrls: ['./spreadsheet-table.component.scss']
})
export class SpreadsheetTableComponent implements OnInit {

  workoutLogs: Array<WorkoutLog>;

  constructor(private workoutJournalService: WorkoutJournalService) {

  }

  ngOnInit() {
    this.workoutJournalService.getWorkoutLogs().subscribe(data => this.workoutLogs = data);
  }

  onClick = ($event: IStarRatingOnClickEvent, log: WorkoutLog) => {
    log.rating = $event.rating;
  }

  onRatingChange = ($event: IStarRatingOnRatingChangeEven, log: WorkoutLog) => {
    log.rating = $event.rating;
  }
}

