import { gql } from "@apollo/client";

export const GamesBoxScoreDocument = gql`
  query GamesBoxScore($id: String!) {
    gamesBoxScore(id: $id) {
      id
      status
      coverage
      game_number
      day_night
      scheduled
      home_team
      away_team
      ps_round
      ps_game
      attendance
      duration
      season_id
      season_type
      season_year
      double_header
      entry_mode
      reference

      mound_visits {
        home {
          used
          remaining
        }
        away {
          used
          remaining
        }
      }

      reviews {
        home {
          used
          remaining
        }
        away {
          used
          remaining
        }
      }

      time_zones {
        venue
        home
        away
      }

      venue {
        name
        market
        capacity
        surface
        address
        city
        state
        zip
        country
        id
        field_orientation
        stadium_type
        time_zone
      }

      broadcasts {
        network
        type
        locale
        channel
      }

      weather {
        forecast {
          temp_f
          condition
          humidity
          dew_point_f
          cloud_cover
          obs_time
          wind {
            speed_mph
            direction
          }
        }
        current_conditions {
          temp_f
          condition
          humidity
          dew_point_f
          cloud_cover
          obs_time
          wind {
            speed_mph
            direction
          }
        }
      }

      final {
        inning
        inning_half
      }

      home {
        name
        market
        abbr
        id
        runs
        hits
        errors
        win
        loss

        probable_pitcher {
          preferred_name
          first_name
          last_name
          id
          full_name
          win
          loss
          era
        }

        starting_pitcher {
          preferred_name
          first_name
          last_name
          id
          full_name
          win
          loss
          era
        }

        scoring {
          number
          sequence
          runs
          hits
          errors
          type
        }

        events {
          hitter_id
          pitcher_id
          inning
          inning_half
          type
          hitter_outcome
          id
          runners {
            starting_base
            first_name
            last_name
            preferred_name
            jersey_number
            id
            full_name
            suffix
          }
        }
      }

      away {
        name
        market
        abbr
        id
        runs
        hits
        errors
        win
        loss

        probable_pitcher {
          preferred_name
          first_name
          last_name
          id
          full_name
          win
          loss
          era
        }

        starting_pitcher {
          preferred_name
          first_name
          last_name
          id
          full_name
          win
          loss
          era
        }

        scoring {
          number
          sequence
          runs
          hits
          errors
          type
        }

        events {
          hitter_id
          pitcher_id
          inning
          inning_half
          type
          hitter_outcome
          id
          runners {
            starting_base
            first_name
            last_name
            preferred_name
            jersey_number
            id
            full_name
            suffix
          }
        }
      }

      pitching {
        win {
          preferred_name
          first_name
          last_name
          jersey_number
          status
          position
          primary_position
          id
          win
          loss
          save
          hold
          blown_save
          full_name
        }
        loss {
          preferred_name
          first_name
          last_name
          jersey_number
          status
          position
          primary_position
          id
          win
          loss
          save
          hold
          blown_save
          full_name
        }
        hold {
          preferred_name
          first_name
          last_name
          jersey_number
          status
          position
          primary_position
          id
          win
          loss
          save
          hold
          blown_save
          full_name
        }
        blown_save {
          preferred_name
          first_name
          last_name
          jersey_number
          status
          position
          primary_position
          id
          win
          loss
          save
          hold
          blown_save
          full_name
        }
      }
    }
  }
`;
