import { Broadcasts, Vanue } from "./gamesMLBTypes";
export type BoxScore = {};
export type Game = {
    id: string;
    status: string;
    coverage: string;
    game_number: number;
    day_night: string;
    scheduled: string;
    home_team: string;
    away_team: string;
    ps_round: string;
    ps_game: string;
    attendance: number;
    duration: string;
    season_id: string;
    season_type: string;
    season_year: number;
    double_header: boolean;
    entry_mode: string;
    reference: string;
    mound_visits: MoundVisits;
    reviews: reviews;
    time_zones: TimeZones;
    venue: Vanue;
    broadcasts: Broadcasts;
};
export type MoundVisits = {
    home: Metting;
    away: Metting;
};
export type Metting = {
    used: number;
    remaining: number;
};
export type reviews = {
    home: Metting;
    away: Metting;
};
export type TimeZones = {
    venue: string;
    home: string;
    away: string;
};
export type Weather = {
    forecast: WeatherInfo;
    current_conditions: WeatherInfo;
};
export type WeatherInfo = {
    temp_f: number;
    condition: string;
    humidity: number;
    dew_point_f: number;
    cloud_cover: number;
    obs_time: string;
    wind: Wind;
};
export type Wind = {
    speed_mph: number;
    direction: string;
};
export type Final = {
    inning: number;
    inning_half: string;
};
//# sourceMappingURL=gamesBoxScoreType.d.ts.map