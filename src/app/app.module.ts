import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';
import { HeaderComponent } from './header/header.component';

export const ROUTES: Routes = [
  {path: 'spreadsheet', component: SpreadsheetComponent},
  {path: '', redirectTo: '/spreadsheet', pathMatch: 'full'},
  {path: '**', redirectTo: '/spreadsheet', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SpreadsheetComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
