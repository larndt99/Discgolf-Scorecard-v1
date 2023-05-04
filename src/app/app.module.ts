import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ScorecardResultsComponent } from './scorecard-results/scorecard-results.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { CoursesComponent } from './courses/courses.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EditScorecardComponent } from './edit-scorecard/edit-scorecard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ScoreToggleComponent } from './score-toggle/score-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ScorecardResultsComponent,
    CoursesComponent,
    CreateDialogComponent,
    EditScorecardComponent,
    ScoreToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
