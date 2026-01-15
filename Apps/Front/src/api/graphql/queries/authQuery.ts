import { gql } from "@apollo/client";

export const AuthQueryDocument = gql`
  query Auth {
    Auth {
      isvalid
    }
  }
`;