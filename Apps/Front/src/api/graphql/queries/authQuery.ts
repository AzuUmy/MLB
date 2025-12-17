import { gql } from "@apollo/client";

export const CheckEmailQueryDocument = gql`
  query EmailCheck($email: String!) {
    EmailCheck(email: $email) {
      email
    }
  }
`;
