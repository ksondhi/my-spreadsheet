import { workoutsReducer } from './reducers/workouts.reducer';
import { appReducers } from './app.state';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreModule, combineReducers } from '@ngrx/store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DemoComponent } from './demo/demo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SpreadsheetTableComponent } from './spreadsheet/spreadsheet-table/spreadsheet-table.component';

import { DataService } from './data/data.service';

import { StarRatingModule} from 'angular-star-rating';

export const ROUTES: Routes = [
  {path: 'spreadsheet', component: SpreadsheetComponent},
  {path: 'demo', component: DemoComponent},
  {path: '', redirectTo: '/spreadsheet', pathMatch: 'full'},
  {path: '**', redirectTo: '/spreadsheet', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SpreadsheetComponent,
    HeaderComponent,
    FooterComponent,
    DemoComponent,
    NavBarComponent,
    SpreadsheetTableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    StarRatingModule.forRoot(),
    StoreModule.provideStore(appReducers),
    StoreDevtoolsModule.instrumentOnlyWithExtension()

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
