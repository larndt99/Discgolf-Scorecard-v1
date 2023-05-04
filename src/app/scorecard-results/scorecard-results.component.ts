import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatastorageService } from '../datastorage.service';
import { EditScorecardComponent } from '../edit-scorecard/edit-scorecard.component';
import { Scorecard } from '../models/scorecard';

@Component({
  selector: 'app-scorecard-results',
  templateUrl: './scorecard-results.component.html',
  styleUrls: ['./scorecard-results.component.scss']
})
export class ScorecardResultsComponent implements OnInit {

  scorecards: Scorecard[] = [];
  pageTitle: string = "Round History";

  constructor( //injection
    private _datastorage: DatastorageService,
    private _dialog: MatDialog
  ) { 
    this.scorecards = this._datastorage.getScorecards();
  }

  ngOnInit(): void {
  }


    public editScorecard(scorecard: Scorecard)
    {
      let dialogRef = this._dialog.open(EditScorecardComponent, {
        height: '100%',
        width: '100%',
        maxWidth: '100% !important',
        data: {scorecard}
      });
      dialogRef.afterClosed().subscribe(result => {
        this._datastorage.saveScorecard();
      });
    }
  



}
