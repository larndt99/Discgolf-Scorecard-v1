import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as _ from 'lodash';
import { DatastorageService } from '../datastorage.service';
import { Scorecard } from '../models/scorecard';


@Component({
  selector: 'app-edit-scorecard',
  templateUrl: './edit-scorecard.component.html',
  styleUrls: ['./edit-scorecard.component.scss']
})
export class EditScorecardComponent implements OnInit {

  public scorecard: Scorecard;
  public number: Number = 1;

  constructor(
    private _datastorage: DatastorageService,
    private _diolog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: {scorecard: Scorecard}
  ) { this.scorecard = data.scorecard }

  ngOnInit(): void {
  }



public getTotalStrokes(name: string): number {
  const player = this.scorecard.players.find((x) => x.playerName == name);


  if (player) {
      const stats = _.sum(player.stats.map((x) => x.strokes));

      return stats;
  }
  else {
      return -1;
  }
  
}



}
