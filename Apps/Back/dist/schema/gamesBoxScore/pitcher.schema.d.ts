export declare class Pitcher {
    preferred_name: string;
    first_name: string;
    last_name: string;
    id: string;
    full_name: string;
    jersey_number?: string;
    win?: number;
    loss?: number;
    era?: number;
}
export declare const PitcherSchema: import("mongoose").Schema<Pitcher, import("mongoose").Model<Pitcher, any, any, any, import("mongoose").Document<unknown, any, Pitcher, any, {}> & Pitcher & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Pitcher, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Pitcher>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Pitcher> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type PitcherDocument = Pitcher & Document;
