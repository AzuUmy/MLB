import { Wind } from './Wind.entity';
export declare class WeatherInfo {
    temp_f: number;
    condition: string;
    humidity: number;
    dew_point_f: number;
    cloud_cover: number;
    obs_time: string;
    wind: Wind;
}
