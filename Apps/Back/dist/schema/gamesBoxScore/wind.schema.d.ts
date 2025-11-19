export declare class Wind {
    speed_mph: number;
    direction: string;
}
export declare const WindSchema: import("mongoose").Schema<Wind, import("mongoose").Model<Wind, any, any, any, import("mongoose").Document<unknown, any, Wind, any, {}> & Wind & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Wind, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Wind>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Wind> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type WindDocument = Wind & Document;
