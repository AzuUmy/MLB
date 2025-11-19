import { Wind } from "./wind.schema";
export declare class WeatherInfo {
    temp_f: number;
    condition: string;
    humidity: number;
    dew_point_f: number;
    cloud_cover: number;
    obs_time: string;
    wind: Wind;
}
export declare const WeatherInfoSchema: import("mongoose").Schema<WeatherInfo, import("mongoose").Model<WeatherInfo, any, any, any, import("mongoose").Document<unknown, any, WeatherInfo, any, {}> & WeatherInfo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, WeatherInfo, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<WeatherInfo>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<WeatherInfo> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type WeatherInfoDocument = WeatherInfo & Document;
