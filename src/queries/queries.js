import { gql } from '@apollo/client';
export const GET_PRESIGNED_URL = gql`
  query {
    getPresignedUrl {
      key
      url
    }
  }
`;

export const USER_LOGIN = gql`
  query loginUser($email: String!, $password: String!) {
    loginUser(input: { email: $email, password: $password }) {
      id
    }
  }
`;

export const AGENT_LOGIN = gql`
  query loginAgent($name: String!) {
    loginAgent(input: { name: $name }) {
      id
    }
  }
`;
