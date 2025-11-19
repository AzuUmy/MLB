import { Metting } from './metting.schema';
export declare class Reviews {
    home: Metting;
    away: Metting;
}
export declare const ReviewsSchema: import("mongoose").Schema<Reviews, import("mongoose").Model<Reviews, any, any, any, import("mongoose").Document<unknown, any, Reviews, any, {}> & Reviews & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Reviews, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Reviews>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Reviews> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type ReviewsDocument = Reviews & Document;
