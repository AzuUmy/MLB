export declare class Status {
    preferred_name: string;
    first_name: string;
    last_name: string;
    jersey_number: string;
    status: string;
    position: string;
    primary_position: string;
    id: string;
    win: number;
    loss: number;
    save: number;
    hold: number;
    blown_save: number;
    full_name: string;
}
export declare const StatusSchema: import("mongoose").Schema<Status, import("mongoose").Model<Status, any, any, any, import("mongoose").Document<unknown, any, Status, any, {}> & Status & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Status, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Status>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Status> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type StatusDocument = Status & Document;
