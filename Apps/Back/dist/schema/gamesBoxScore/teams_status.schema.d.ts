import { Pitcher } from "./pitcher.schema";
import { Scoring } from "./scoring.schema";
import { Events } from "./events.schema";
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
export declare const TeamStatusSchema: import("mongoose").Schema<TeamStatus, import("mongoose").Model<TeamStatus, any, any, any, import("mongoose").Document<unknown, any, TeamStatus, any, {}> & TeamStatus & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TeamStatus, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<TeamStatus>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<TeamStatus> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type TeamStatusDocument = TeamStatus & Document;
