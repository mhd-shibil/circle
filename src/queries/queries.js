import { gql } from '@apollo/client';
export const GET_PRESIGNED_URL = gql`
  query {
    getPresignedUrl {
      key
      url
    }
  }
`;
export const GET_AGENTS_ENQUIRIES = gql`
  query {
    getAgentEnquiries {
      id
      user {
        id
        email
        password
        name
        firebaseId
      }
      pickUpPoint
      destination {
        id
        name
      }
      startDate
      returnDate
      budget
      adults
      children
      hotelStar
      notes
      createdAt
    }
  }
`;
