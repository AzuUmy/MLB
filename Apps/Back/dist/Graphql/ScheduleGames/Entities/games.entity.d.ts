import { Venue } from './venu.entity';
import { Team } from './team.entity';
import { Broadcast } from './broadcast.entity';
export declare class Games {
    id: string;
    status: string;
    coverage: string;
    game_number: string;
    day_night: string;
    scheduled: string;
    home_team: string;
    away_team: string;
    ps_round: string;
    ps_game: string;
    attendance?: string;
    duration?: string;
    double_header: boolean;
    entry_mode: string;
    reference: string;
    venue: Venue;
    home: Team;
    away: Team;
    broadcasts: Broadcast[];
}
