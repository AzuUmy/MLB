export declare class Runners {
    starting_base: number;
    first_name: string;
    last_name: string;
    preferred_name: string;
    jersey_number: string;
    id: string;
    full_name: string;
    suffix?: string;
}
export declare const RunnersSchema: import("mongoose").Schema<Runners, import("mongoose").Model<Runners, any, any, any, import("mongoose").Document<unknown, any, Runners, any, {}> & Runners & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Runners, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Runners>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Runners> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type RunnersDocument = Runners & Document;
