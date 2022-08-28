import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
  mutation ($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      firebaseId
    }
  }
`;
export const UPDATE_AGENT = gql`
  mutation ($id: ID!, $input: UpdateAgentInput!) {
    updateAgent(id: $id, input: $input) {
      firebaseId
    }
  }
`;
