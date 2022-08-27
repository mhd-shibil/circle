import { gql } from '@apollo/client';
export const GET_PRESIGNED_URL = gql`
  query {
    getPresignedUrl {
      key
      url
    }
  }
`;
