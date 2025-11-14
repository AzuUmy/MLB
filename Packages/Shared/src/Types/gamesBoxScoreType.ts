import { Broadcasts, Vanue } from "./scheduleGamesType";

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
  weather: Weather;
  final: Final;
  home: TeamStatus;
  away: TeamStatus;
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
  probable_pitcher: Pitcher;
  starting_pitcher: Pitcher;
  scoring: Scoring[];
  events: Events[];
};

export type Pitcher = {
  preferred_name: string;
  first_name: string;
  last_name: string;
  id: string;
  full_name: string;
  win: number;
  loss: number;
  era: number;
};

export type Scoring = {
  number: number;
  sequence: number;
  runs: number;
  hits: number;
  errors: number;
  type: string;
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
