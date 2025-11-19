import type { Venue } from './venue.schema';
import type { Team } from './team.schema';
import { Broadcast } from 'src/Graphql/ScheduleGames/Entities/broadcast.entity';
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
    venu: Venue;
    home: Team;
    away: Team;
    broadcasts: Broadcast[];
}
export type GamesDocument = Games & Document;
export declare const BroadcastSchema: import("mongoose").Schema<Games, import("mongoose").Model<Games, any, any, any, import("mongoose").Document<unknown, any, Games, any, {}> & Games & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Games, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Games>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Games> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
