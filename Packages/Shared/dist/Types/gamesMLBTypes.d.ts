import { Location } from "..";
export type ScheduleGames = {
    league: League;
    date: string;
    games: Games[];
    _comment: string;
};
export type League = {
    alias: string;
    name: string;
    id: string;
};
export type Games = {
    id: string;
    status: string;
    coverage: string;
    game_number: string;
    day_night: string;
    scheduled: string;
    home_team: string;
    away_team: string;
    ps_round: string;
    ps_game: string;
    attendance: string;
    duration: string;
    double_header: boolean;
    entry_mode: string;
    reference: string;
    venue: Vanue;
    home: Home;
    away: Away;
    broadcasts: Broadcasts[];
};
export type Vanue = {
    name: string;
    market: string;
    capacity: string;
    surface: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    id: string;
    field_orientation: string;
    stadium_type: string;
    time_zone: string;
    location: Location;
};
export type Home = {
    name: string;
    market: string;
    abbr: string;
    id: string;
    seed: number;
    win: number;
    loss: number;
};
export type Away = {
    name: string;
    market: string;
    abbr: string;
    id: string;
    seed: number;
    win: number;
    loss: number;
};
export type Broadcasts = {
    network: string;
    type: string;
    locale: string;
    channel: string;
};
export type ScheduleGamesSeries = {
    series: string;
    games: Games[];
};
//# sourceMappingURL=gamesMLBTypes.d.ts.map