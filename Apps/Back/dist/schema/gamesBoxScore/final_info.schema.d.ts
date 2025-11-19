export declare class FinalInfo {
    inning: number;
    inning_half: string;
}
export declare const FinalInfoSchema: import("mongoose").Schema<FinalInfo, import("mongoose").Model<FinalInfo, any, any, any, import("mongoose").Document<unknown, any, FinalInfo, any, {}> & FinalInfo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinalInfo, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinalInfo>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<FinalInfo> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type FinalInfoDocument = FinalInfo & Document;
