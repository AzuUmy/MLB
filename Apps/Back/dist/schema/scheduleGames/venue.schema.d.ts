export declare class Venue {
    name: string;
    market: string;
    capacity: string;
    surface: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    id: string;
    field_orientation: string;
    stadium_type: string;
    time_zone: string;
    location?: {
        lat?: string;
        lng?: string;
    };
}
export type VenueDocument = Venue & Document;
export declare const VenueSchema: import("mongoose").Schema<Venue, import("mongoose").Model<Venue, any, any, any, import("mongoose").Document<unknown, any, Venue, any, {}> & Venue & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Venue, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Venue>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Venue> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
