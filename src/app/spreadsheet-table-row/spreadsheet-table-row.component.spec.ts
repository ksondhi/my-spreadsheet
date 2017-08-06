import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadsheetTableRowComponent } from './spreadsheet-table-row.component';

describe('SpreadsheetTableRowComponent', () => {
  let component: SpreadsheetTableRowComponent;
  let fixture: ComponentFixture<SpreadsheetTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
