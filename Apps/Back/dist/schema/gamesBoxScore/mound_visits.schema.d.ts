import { Metting } from './metting.schema';
export declare class MoundVisits {
    home: Metting;
    away: Metting;
}
export declare const MoundVisitsSchema: import("mongoose").Schema<MoundVisits, import("mongoose").Model<MoundVisits, any, any, any, import("mongoose").Document<unknown, any, MoundVisits, any, {}> & MoundVisits & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MoundVisits, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<MoundVisits>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<MoundVisits> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type MoundVisitsDocument = MoundVisits & Document;
