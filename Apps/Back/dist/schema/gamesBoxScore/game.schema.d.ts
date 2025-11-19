import { MoundVisits } from "./mound_visits.schema";
import { Reviews } from "./reviews.schema";
import { TimeZones } from "../time_zones.schema";
import { Weather } from "./weather.schema";
import { FinalInfo } from "./final_info.schema";
import { TeamStatus } from "./teams_status.schema";
import { Venue } from "../scheduleGames/venue.schema";
import { Broadcast } from "../scheduleGames/broadcast.schema";
import { Pitching } from "./pitching.schema";
export declare class Game {
    id: string;
    status: string;
    coverage: string;
    game_number: number;
    day_night: string;
    scheduled: string;
    home_team: string;
    away_team: string;
    ps_round: string;
    ps_game: string;
    attendance: number;
    duration: string;
    season_id: string;
    season_type: string;
    season_year: number;
    double_header: boolean;
    entry_mode: string;
    reference: string;
    mound_visits?: MoundVisits;
    reviews?: Reviews;
    time_zones?: TimeZones;
    venue?: Venue;
    broadcasts: Broadcast[];
    weather?: Weather;
    final?: FinalInfo;
    home?: TeamStatus;
    away?: TeamStatus;
    pitching?: Pitching;
}
export declare const GameSchema: import("mongoose").Schema<Game, import("mongoose").Model<Game, any, any, any, import("mongoose").Document<unknown, any, Game, any, {}> & Game & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Game, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Game>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Game> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type GameDocument = Game & Document;
