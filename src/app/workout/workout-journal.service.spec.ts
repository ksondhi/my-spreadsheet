import { TestBed, inject } from '@angular/core/testing';

import { WorkoutJournalService } from './workout-journal.service';

describe('WorkoutJournalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutJournalService]
    });
  });

  it('should be created', inject([WorkoutJournalService], (service: WorkoutJournalService) => {
    expect(service).toBeTruthy();
  }));
});
