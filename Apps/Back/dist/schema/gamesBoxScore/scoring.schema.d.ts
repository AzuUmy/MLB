export declare class Scoring {
    number: number;
    sequence: number;
    runs: number;
    hits: number;
    errors: number;
    type: string;
}
export declare const ScoringSchema: import("mongoose").Schema<Scoring, import("mongoose").Model<Scoring, any, any, any, import("mongoose").Document<unknown, any, Scoring, any, {}> & Scoring & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Scoring, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Scoring>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Scoring> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type ScoringDocument = Scoring & Document;
