import { gql } from "@apollo/client";

export const AuthQueryDocument = gql`
  query Auth($email: String!, $password: String!) {
    Auth(email: $email, password: $password) {
      accessToken
    }
  }
`;