import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
  mutation ($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      firebaseId
    }
  }
`;
