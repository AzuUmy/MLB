import { League } from './legue.entity';
import { Games } from './games.entity';
export declare class ScheduleGames {
    league: League;
    date?: string;
    games: Games[];
    _comment?: string;
    seriesGroups?: ScheduleGamesSeries[];
}
export declare class ScheduleGamesSeries {
    series: string;
    games: Games[];
}
