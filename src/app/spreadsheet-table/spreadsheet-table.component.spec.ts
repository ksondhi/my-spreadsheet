import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadsheetTableComponent } from './spreadsheet-table.component';

describe('SpreadsheetTableComponent', () => {
  let component: SpreadsheetTableComponent;
  let fixture: ComponentFixture<SpreadsheetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
