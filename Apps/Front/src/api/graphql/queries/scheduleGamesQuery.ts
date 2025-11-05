import { gql } from '@apollo/client';

export const ScheduleGamesDocument = gql`
  query ScheduleGames($startDate: String!, $endDate: String!) {
    scheduleGames(startDate: $startDate, endDate: $endDate) {
      series
      games {
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
        double_header
        entry_mode
        reference
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
        home {
          name
          market
          abbr
          id
          seed
          win
          loss
        }
        away {
          name
          market
          abbr
          id
          seed
          win
          loss
        }
        broadcasts {
          network
          type
          locale
          channel
        }
      }
    }
  }
`;