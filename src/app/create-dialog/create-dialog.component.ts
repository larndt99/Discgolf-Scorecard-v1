import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { DatastorageService } from '../datastorage.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {

public name: string = "";
public selectedPlayers: string[] = [];


public names: string[] = [];

  constructor(
    private _datastorage: DatastorageService,
    private _cd: ChangeDetectorRef
    
    ) 
    
  {
      this.names = this._datastorage.getPlayers();
  }

  ngOnInit(): void {
  }

  addPlayer()
  {
    this._datastorage.addPlayer(this.name);
    
    this.name = "";

    this._cd.detectChanges();

  }

  // selectPlayers(changes: MatSelectionListChange)
  // {
  //   this.selectedPlayers = changes.options.map((x) => x.value);
  //   console.log(changes.source.selectedOptions.selected);
    
  // }

}
