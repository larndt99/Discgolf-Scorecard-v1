
import { Course, Hole } from "./courses";
import * as _ from "lodash";

export interface ScorecardStat {
    hole: Hole;
    strokes: number;
}

export interface ScorecardPlayer {
    playerName: string;
    stats: ScorecardStat[];
    

}
export class Scorecard {
    public course = {} as Course;
    public players: ScorecardPlayer[] = [];
    public completed: boolean = false;
    public dateCreated: Date = new Date();
    public par: number;

    constructor(course: Course, players: string[]){
        this.course = course;
        this.players = [];
        players.forEach((player) => {
            const stats: ScorecardStat[] = [];
            course.holes.forEach((hole) => {
                stats.push({hole: hole, strokes: 0} as ScorecardStat)
            });
            this.players.push({playerName: player, stats: stats} as ScorecardPlayer)
            this.par = _.sum(this.course.holes.map((x) => x.par))
        });


    }

    public getTotalStrokes(name: string): number {
        const player = this.players.find((x) => x.playerName == name);
        if (player) {
            return _.sum(player.stats);
        }
        else {
            return -1;
        }
        
    }

}