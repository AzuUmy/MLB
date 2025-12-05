import { Broadcasts, Venue } from "./scheduleGamesType.js";
export type BoxScore = {
    game: Game;
    _comment: string;
};
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
    attendance?: number | null | undefined;
    duration: string;
    season_id?: string | null | undefined;
    season_type?: string | null | undefined;
    season_year?: number | null | undefined;
    double_header: boolean;
    entry_mode: string;
    reference: string;
    mound_visits?: MoundVisits | null | undefined;
    reviews?: reviews | null | undefined;
    time_zones?: TimeZones | null | undefined;
    venue?: Venue | null | undefined;
    broadcasts?: (Broadcasts | null)[] | null;
    weather?: Weather | null | undefined;
    final?: Final | null | undefined;
    home?: TeamStatus | null | undefined;
    away?: TeamStatus | null | undefined;
    pitching?: Pitching | null | undefined;
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
export type TeamStatus = {
    name: string;
    market: string;
    abbr: string;
    id: string;
    runs: number;
    hits: number;
    errors: number;
    win: number;
    loss: number;
    probable_pitcher?: Pitcher | null | undefined;
    starting_pitcher?: Pitcher | null | undefined;
    scoring: Scoring[];
    events: Events[];
};
export type Pitcher = {
    preferred_name: string;
    first_name: string;
    last_name: string;
    jersey_number?: string | null | undefined;
    id: string;
    full_name: string;
    win?: number | null | undefined;
    loss?: number | null | undefined;
    era?: number | null | undefined;
};
export type Scoring = {
    number?: number | null | undefined;
    sequence?: number | null | undefined;
    runs?: number | null | undefined;
    hits?: number | null | undefined;
    errors?: number | null | undefined;
    type?: string | null | undefined;
};
export type Events = {
    hitter_id: string;
    pitcher_id: string;
    inning: number;
    inning_half: string;
    type: string;
    hitter_outcome: string;
    id: string;
    runners: Runners[];
};
export type Runners = {
    starting_base: number;
    first_name: string;
    last_name: string;
    preferred_name: string;
    jersey_number: string;
    id: string;
    full_name: string;
    suffix?: string | null | undefined;
};
export type Pitching = {
    win: Status;
    loss: Status;
    hold: Status[];
    blown_save: Status[];
};
export type Status = {
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
};
//# sourceMappingURL=gamesBoxScoreType.d.ts.map