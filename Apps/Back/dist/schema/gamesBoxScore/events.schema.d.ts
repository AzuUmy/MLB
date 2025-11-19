import { Runners } from './runners.schema';
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
export declare const EventsSchema: import("mongoose").Schema<Events, import("mongoose").Model<Events, any, any, any, import("mongoose").Document<unknown, any, Events, any, {}> & Events & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Events, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Events>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Events> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type EventsDocument = Events & Document;
