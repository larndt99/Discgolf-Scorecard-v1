import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-score-toggle',
  templateUrl: './score-toggle.component.html',
  styleUrls: ['./score-toggle.component.scss']
})
export class ScoreToggleComponent implements OnInit {

  @Input()
  public score?: number;

  @Input()
  public par: number;

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  public scoreChange: EventEmitter<number> = new EventEmitter<number>();

  public addScore(): void {
    if (this.score)
    {
      this.score++;
    }
    else
    {
      this.score = this.par;
    }

    this.scoreChange.emit(this.score);

  }

  public subtractScore(): void {7
    if (this.score && this.score >= 2) {
      this.score--;

    }
    else if (!this.score) {
      this.score = this.par - 1;
    }
    this.scoreChange.emit(this.score);
  }

  

}
