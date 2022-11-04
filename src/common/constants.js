
import { gql } from '@apollo/client';

  export const GET_USERS_QUERY = gql`
  query Query {
    getAllUsers {
        id
        firstName
        lastName
        fullName
      }
  }`;

