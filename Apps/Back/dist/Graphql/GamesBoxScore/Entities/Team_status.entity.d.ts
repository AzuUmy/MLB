import { Scoring } from './Scoring.entity';
import { Events } from './Events.entity';
import { Pitcher } from './Pitcher.entity';
export declare class TeamStatus {
    name: string;
    market: string;
    abbr: string;
    id: string;
    runs: number;
    hits: number;
    errors: number;
    win: number;
    loss: number;
    probable_pitcher?: Pitcher;
    starting_pitcher?: Pitcher;
    scoring: Scoring[];
    events: Events[];
}
