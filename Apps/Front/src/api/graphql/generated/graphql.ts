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

export type Game = {
  __typename?: 'Game';
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

export type Query = {
  __typename?: 'Query';
  Teams: Array<Teams>;
  hello: Scalars['String']['output'];
  scheduleGames: Array<ScheduleGamesSeries>;
};


export type QueryScheduleGamesArgs = {
  endDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type ScheduleGamesSeries = {
  __typename?: 'ScheduleGamesSeries';
  games: Array<Game>;
  series: Scalars['String']['output'];
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

export type Teams = {
  __typename?: 'Teams';
  abbr?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  market?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type Venue = {
  __typename?: 'Venue';
  address: Scalars['String']['output'];
  capacity: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  field_orientation: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  market: Scalars['String']['output'];
  name: Scalars['String']['output'];
  stadium_type: Scalars['String']['output'];
  state: Scalars['String']['output'];
  surface: Scalars['String']['output'];
  time_zone: Scalars['String']['output'];
  zip: Scalars['String']['output'];
};

export type ScheduleGamesQueryVariables = Exact<{
  startDate: Scalars['String']['input'];
  endDate: Scalars['String']['input'];
}>;


export type ScheduleGamesQuery = { __typename?: 'Query', scheduleGames: Array<{ __typename?: 'ScheduleGamesSeries', series: string, games: Array<{ __typename?: 'Game', id: string, status: string, coverage: string, game_number: string, day_night: string, scheduled: string, home_team: string, away_team: string, ps_round: string, ps_game: string, attendance?: string | null, duration?: string | null, double_header: boolean, entry_mode: string, reference: string, venue: { __typename?: 'Venue', name: string, market: string, capacity: string, surface: string, address: string, city: string, state: string, zip: string, country: string, id: string, field_orientation: string, stadium_type: string, time_zone: string }, home: { __typename?: 'Team', name: string, market: string, abbr: string, id: string, seed: number, win: number, loss: number }, away: { __typename?: 'Team', name: string, market: string, abbr: string, id: string, seed: number, win: number, loss: number }, broadcasts: Array<{ __typename?: 'Broadcast', network: string, type: string, locale: string, channel?: string | null }> }> }> };
