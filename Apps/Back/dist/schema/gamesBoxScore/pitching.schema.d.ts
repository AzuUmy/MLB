import { Status } from './status.schema';
export declare class Pitching {
    win: Status;
    loss: Status;
    hold: Status[];
    blown_save: Status[];
}
export declare const PitchingSchema: import("mongoose").Schema<Pitching, import("mongoose").Model<Pitching, any, any, any, import("mongoose").Document<unknown, any, Pitching, any, {}> & Pitching & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Pitching, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Pitching>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Pitching> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type PitchingDocument = Pitching & Document;
