import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DemoComponent } from './demo/demo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SpreadsheetTableComponent } from './spreadsheet-table/spreadsheet-table.component';

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
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
