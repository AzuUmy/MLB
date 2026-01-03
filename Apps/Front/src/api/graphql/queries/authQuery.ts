import { gql } from "@apollo/client";

export const AuthQueryDocument = gql`
  query Auth($email: String!, $lastLoginAt: String!) {
    Auth(email: $email, lastLoginAt: $lastLoginAt) {
      accessToken
    }
  }
`;
 