export declare class Metting {
    used: number;
    remaining: number;
}
export declare const MettingSchema: import("mongoose").Schema<Metting, import("mongoose").Model<Metting, any, any, any, import("mongoose").Document<unknown, any, Metting, any, {}> & Metting & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Metting, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Metting>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Metting> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type MettingDocument = Metting & Document;
