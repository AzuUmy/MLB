export declare class TimeZones {
    venue: string;
    home: string;
    away: string;
}
export declare const TimeZonesSchema: import("mongoose").Schema<TimeZones, import("mongoose").Model<TimeZones, any, any, any, import("mongoose").Document<unknown, any, TimeZones, any, {}> & TimeZones & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TimeZones, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<TimeZones>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<TimeZones> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type TimeZonesDocument = TimeZones & Document;
