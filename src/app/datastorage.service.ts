import { Injectable } from '@angular/core';
import { Course } from './models/courses';
import { Scorecard } from './models/scorecard';

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {

  private _playersKey = "players";
  private _scorecardKey = "scorecards";
  public players: string[] = [];
  public scorecards: Scorecard[] = [];

  constructor() 
  {
    const savedData = window.localStorage.getItem(this._scorecardKey);
    const savedPlayers = window.localStorage.getItem(this._playersKey);

    if (savedData !== null)
    {
    this.scorecards = JSON.parse(savedData);
    }
    if (savedPlayers)
    {
      this.players = JSON.parse(savedPlayers)
    }
  }

  addScorecard(course: Course, players: string[])
  {
    const scorecard = new Scorecard(course, players)
    this.scorecards.push(scorecard);
    this.saveScorecardChanges();
  }

  addPlayer(name: string)
  {
    this.players.push(name);
    this.savePlayerChanges();
  }


  removeItem(i: number) 
  {
    this.scorecards.splice(i, 1);
    this.saveScorecardChanges();
  }

  getScorecards()
  {
    return(this.scorecards);
  }

  getPlayers()
  {
    return(this.players);
  }

  saveScorecard()
  {
    this.saveScorecardChanges();
  }

  private saveScorecardChanges()
  {
    window.localStorage.setItem(this._scorecardKey, JSON.stringify(this.scorecards));
  }

  private savePlayerChanges()
  {
    window.localStorage.setItem(this._playersKey, JSON.stringify(this.players));
  }

}


