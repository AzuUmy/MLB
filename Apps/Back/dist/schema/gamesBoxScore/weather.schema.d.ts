import { WeatherInfo } from "./weather_info.schema";
export declare class Weather {
    forecast: WeatherInfo;
    current_conditions: WeatherInfo;
}
export declare const WeatherSchema: import("mongoose").Schema<Weather, import("mongoose").Model<Weather, any, any, any, import("mongoose").Document<unknown, any, Weather, any, {}> & Weather & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Weather, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Weather>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Weather> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type WeatherDocument = Weather & Document;
