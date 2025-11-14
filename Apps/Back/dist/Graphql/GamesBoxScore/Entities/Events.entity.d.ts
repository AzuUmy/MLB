import { Runners } from './Runners.entity';
export declare class Events {
    hitter_id: string;
    pitcher_id: string;
    inning: number;
    inning_half: string;
    type: string;
    hitter_outcome: string;
    id: string;
    runners: Runners[];
}
