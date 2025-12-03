export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Broadcast = {
  __typename?: 'Broadcast';
  channel?: Maybe<Scalars['String']['output']>;
  locale: Scalars['String']['output'];
  network: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Events = {
  __typename?: 'Events';
  hitter_id: Scalars['String']['output'];
  hitter_outcome: Scalars['String']['output'];
  id: Scalars['String']['output'];
  inning: Scalars['Int']['output'];
  inning_half: Scalars['String']['output'];
  pitcher_id: Scalars['String']['output'];
  runners: Array<Runners>;
  type: Scalars['String']['output'];
};

export type Final = {
  __typename?: 'Final';
  inning: Scalars['Int']['output'];
  inning_half: Scalars['String']['output'];
};

export type Game = {
  __typename?: 'Game';
  attendance?: Maybe<Scalars['Int']['output']>;
  away?: Maybe<TeamStatus>;
  away_team: Scalars['String']['output'];
  broadcasts?: Maybe<Array<Maybe<Broadcast>>>;
  coverage: Scalars['String']['output'];
  day_night: Scalars['String']['output'];
  double_header: Scalars['Boolean']['output'];
  duration: Scalars['String']['output'];
  entry_mode: Scalars['String']['output'];
  final?: Maybe<Final>;
  game_number: Scalars['Int']['output'];
  home?: Maybe<TeamStatus>;
  home_team: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mound_visits?: Maybe<MoundVisits>;
  pitching?: Maybe<Pitching>;
  ps_game: Scalars['String']['output'];
  ps_round: Scalars['String']['output'];
  reference: Scalars['String']['output'];
  reviews?: Maybe<Reviews>;
  scheduled: Scalars['String']['output'];
  season_id?: Maybe<Scalars['String']['output']>;
  season_type?: Maybe<Scalars['String']['output']>;
  season_year?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  time_zones?: Maybe<TimeZones>;
  venue?: Maybe<Venue>;
  weather?: Maybe<Weather>;
};

export type Games = {
  __typename?: 'Games';
  attendance?: Maybe<Scalars['String']['output']>;
  away: Team;
  away_team: Scalars['String']['output'];
  broadcasts: Array<Broadcast>;
  coverage: Scalars['String']['output'];
  day_night: Scalars['String']['output'];
  double_header: Scalars['Boolean']['output'];
  duration?: Maybe<Scalars['String']['output']>;
  entry_mode: Scalars['String']['output'];
  game_number: Scalars['String']['output'];
  home: Team;
  home_team: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ps_game: Scalars['String']['output'];
  ps_round: Scalars['String']['output'];
  reference: Scalars['String']['output'];
  scheduled: Scalars['String']['output'];
  status: Scalars['String']['output'];
  venue: Venue;
};

export type League = {
  __typename?: 'League';
  alias: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Location = {
  __typename?: 'Location';
  lat?: Maybe<Scalars['String']['output']>;
  lng?: Maybe<Scalars['String']['output']>;
};

export type Metting = {
  __typename?: 'Metting';
  remaining: Scalars['Int']['output'];
  used: Scalars['Int']['output'];
};

export type MoundVisits = {
  __typename?: 'MoundVisits';
  away: Metting;
  home: Metting;
};

export type Pitcher = {
  __typename?: 'Pitcher';
  era?: Maybe<Scalars['Float']['output']>;
  first_name: Scalars['String']['output'];
  full_name: Scalars['String']['output'];
  id: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  loss?: Maybe<Scalars['Int']['output']>;
  preferred_name: Scalars['String']['output'];
  win?: Maybe<Scalars['Int']['output']>;
};

export type Pitching = {
  __typename?: 'Pitching';
  blown_save: Array<Status>;
  hold: Array<Status>;
  loss: Status;
  win: Status;
};

export type Query = {
  __typename?: 'Query';
  Teams: Array<Teams>;
  gamesBoxScore: Game;
  hello: Scalars['String']['output'];
  scheduleGames: Array<ScheduleGamesSeries>;
};


export type QueryGamesBoxScoreArgs = {
  id: Scalars['String']['input'];
};


export type QueryScheduleGamesArgs = {
  endDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type Reviews = {
  __typename?: 'Reviews';
  away: Metting;
  home: Metting;
};

export type Runners = {
  __typename?: 'Runners';
  first_name: Scalars['String']['output'];
  full_name: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jersey_number: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  preferred_name: Scalars['String']['output'];
  starting_base: Scalars['Int']['output'];
  suffix?: Maybe<Scalars['String']['output']>;
};

export type ScheduleGamesSeries = {
  __typename?: 'ScheduleGamesSeries';
  games: Array<Games>;
  series: Scalars['String']['output'];
};

export type Scoring = {
  __typename?: 'Scoring';
  errors?: Maybe<Scalars['Int']['output']>;
  hits?: Maybe<Scalars['Int']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  runs?: Maybe<Scalars['Int']['output']>;
  sequence?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Status = {
  __typename?: 'Status';
  blown_save: Scalars['Int']['output'];
  first_name: Scalars['String']['output'];
  full_name: Scalars['String']['output'];
  hold: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  jersey_number: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  loss: Scalars['Int']['output'];
  position: Scalars['String']['output'];
  preferred_name: Scalars['String']['output'];
  primary_position: Scalars['String']['output'];
  save: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  win: Scalars['Int']['output'];
};

export type Team = {
  __typename?: 'Team';
  abbr: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  loss: Scalars['Int']['output'];
  market: Scalars['String']['output'];
  name: Scalars['String']['output'];
  seed: Scalars['Int']['output'];
  win: Scalars['Int']['output'];
};

export type TeamStatus = {
  __typename?: 'TeamStatus';
  abbr: Scalars['String']['output'];
  errors: Scalars['Int']['output'];
  events: Array<Events>;
  hits: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  loss: Scalars['Int']['output'];
  market: Scalars['String']['output'];
  name: Scalars['String']['output'];
  probable_pitcher?: Maybe<Pitcher>;
  runs: Scalars['Int']['output'];
  scoring: Array<Scoring>;
  starting_pitcher?: Maybe<Pitcher>;
  win: Scalars['Int']['output'];
};

export type Teams = {
  __typename?: 'Teams';
  abbr?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  market?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type TimeZones = {
  __typename?: 'TimeZones';
  away: Scalars['String']['output'];
  home: Scalars['String']['output'];
  venue: Scalars['String']['output'];
};

export type Venue = {
  __typename?: 'Venue';
  address: Scalars['String']['output'];
  capacity: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  field_orientation: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  location?: Maybe<Location>;
  market: Scalars['String']['output'];
  name: Scalars['String']['output'];
  stadium_type: Scalars['String']['output'];
  state: Scalars['String']['output'];
  surface: Scalars['String']['output'];
  time_zone: Scalars['String']['output'];
  zip: Scalars['String']['output'];
};

export type Weather = {
  __typename?: 'Weather';
  current_conditions: WeatherInfo;
  forecast: WeatherInfo;
};

export type WeatherInfo = {
  __typename?: 'WeatherInfo';
  cloud_cover: Scalars['Int']['output'];
  condition: Scalars['String']['output'];
  dew_point_f: Scalars['Float']['output'];
  humidity: Scalars['Int']['output'];
  obs_time: Scalars['String']['output'];
  temp_f: Scalars['Float']['output'];
  wind: Wind;
};

export type Wind = {
  __typename?: 'Wind';
  direction: Scalars['String']['output'];
  speed_mph: Scalars['Float']['output'];
};

export type GamesBoxScoreQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GamesBoxScoreQuery = { __typename?: 'Query', gamesBoxScore: { __typename?: 'Game', id: string, status: string, coverage: string, game_number: number, day_night: string, scheduled: string, home_team: string, away_team: string, ps_round: string, ps_game: string, attendance?: number | null, duration: string, season_id?: string | null, season_type?: string | null, season_year?: number | null, double_header: boolean, entry_mode: string, reference: string, mound_visits?: { __typename?: 'MoundVisits', home: { __typename?: 'Metting', used: number, remaining: number }, away: { __typename?: 'Metting', used: number, remaining: number } } | null, reviews?: { __typename?: 'Reviews', home: { __typename?: 'Metting', used: number, remaining: number }, away: { __typename?: 'Metting', used: number, remaining: number } } | null, time_zones?: { __typename?: 'TimeZones', venue: string, home: string, away: string } | null, venue?: { __typename?: 'Venue', name: string, market: string, capacity: string, surface: string, address: string, city: string, state: string, zip: string, country: string, id: string, field_orientation: string, stadium_type: string, time_zone: string } | null, broadcasts?: Array<{ __typename?: 'Broadcast', network: string, type: string, locale: string, channel?: string | null } | null> | null, weather?: { __typename?: 'Weather', forecast: { __typename?: 'WeatherInfo', temp_f: number, condition: string, humidity: number, dew_point_f: number, cloud_cover: number, obs_time: string, wind: { __typename?: 'Wind', speed_mph: number, direction: string } }, current_conditions: { __typename?: 'WeatherInfo', temp_f: number, condition: string, humidity: number, dew_point_f: number, cloud_cover: number, obs_time: string, wind: { __typename?: 'Wind', speed_mph: number, direction: string } } } | null, final?: { __typename?: 'Final', inning: number, inning_half: string } | null, home?: { __typename?: 'TeamStatus', name: string, market: string, abbr: string, id: string, runs: number, hits: number, errors: number, win: number, loss: number, probable_pitcher?: { __typename?: 'Pitcher', preferred_name: string, first_name: string, last_name: string, id: string, full_name: string, win?: number | null, loss?: number | null, era?: number | null } | null, starting_pitcher?: { __typename?: 'Pitcher', preferred_name: string, first_name: string, last_name: string, id: string, full_name: string, win?: number | null, loss?: number | null, era?: number | null } | null, scoring: Array<{ __typename?: 'Scoring', number?: number | null, sequence?: number | null, runs?: number | null, hits?: number | null, errors?: number | null, type?: string | null }>, events: Array<{ __typename?: 'Events', hitter_id: string, pitcher_id: string, inning: number, inning_half: string, type: string, hitter_outcome: string, id: string, runners: Array<{ __typename?: 'Runners', starting_base: number, first_name: string, last_name: string, preferred_name: string, jersey_number: string, id: string, full_name: string, suffix?: string | null }> }> } | null, away?: { __typename?: 'TeamStatus', name: string, market: string, abbr: string, id: string, runs: number, hits: number, errors: number, win: number, loss: number, probable_pitcher?: { __typename?: 'Pitcher', preferred_name: string, first_name: string, last_name: string, id: string, full_name: string, win?: number | null, loss?: number | null, era?: number | null } | null, starting_pitcher?: { __typename?: 'Pitcher', preferred_name: string, first_name: string, last_name: string, id: string, full_name: string, win?: number | null, loss?: number | null, era?: number | null } | null, scoring: Array<{ __typename?: 'Scoring', number?: number | null, sequence?: number | null, runs?: number | null, hits?: number | null, errors?: number | null, type?: string | null }>, events: Array<{ __typename?: 'Events', hitter_id: string, pitcher_id: string, inning: number, inning_half: string, type: string, hitter_outcome: string, id: string, runners: Array<{ __typename?: 'Runners', starting_base: number, first_name: string, last_name: string, preferred_name: string, jersey_number: string, id: string, full_name: string, suffix?: string | null }> }> } | null, pitching?: { __typename?: 'Pitching', win: { __typename?: 'Status', preferred_name: string, first_name: string, last_name: string, jersey_number: string, status: string, position: string, primary_position: string, id: string, win: number, loss: number, save: number, hold: number, blown_save: number, full_name: string }, loss: { __typename?: 'Status', preferred_name: string, first_name: string, last_name: string, jersey_number: string, status: string, position: string, primary_position: string, id: string, win: number, loss: number, save: number, hold: number, blown_save: number, full_name: string }, hold: Array<{ __typename?: 'Status', preferred_name: string, first_name: string, last_name: string, jersey_number: string, status: string, position: string, primary_position: string, id: string, win: number, loss: number, save: number, hold: number, blown_save: number, full_name: string }>, blown_save: Array<{ __typename?: 'Status', preferred_name: string, first_name: string, last_name: string, jersey_number: string, status: string, position: string, primary_position: string, id: string, win: number, loss: number, save: number, hold: number, blown_save: number, full_name: string }> } | null } };

export type ScheduleGamesQueryVariables = Exact<{
  startDate: Scalars['String']['input'];
  endDate: Scalars['String']['input'];
}>;


export type ScheduleGamesQuery = { __typename?: 'Query', scheduleGames: Array<{ __typename?: 'ScheduleGamesSeries', series: string, games: Array<{ __typename?: 'Games', id: string, status: string, coverage: string, game_number: string, day_night: string, scheduled: string, home_team: string, away_team: string, ps_round: string, ps_game: string, attendance?: string | null, duration?: string | null, double_header: boolean, entry_mode: string, reference: string, venue: { __typename?: 'Venue', name: string, market: string, capacity: string, surface: string, address: string, city: string, state: string, zip: string, country: string, id: string, field_orientation: string, stadium_type: string, time_zone: string }, home: { __typename?: 'Team', name: string, market: string, abbr: string, id: string, seed: number, win: number, loss: number }, away: { __typename?: 'Team', name: string, market: string, abbr: string, id: string, seed: number, win: number, loss: number }, broadcasts: Array<{ __typename?: 'Broadcast', network: string, type: string, locale: string, channel?: string | null }> }> }> };
