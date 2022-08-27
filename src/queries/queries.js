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
  query getAgentEnquiries($agentId: String!) {
    getAgentEnquiries(agentId: $agentId) {
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

export const getQuotationsQuery = gql`
  query getQuotations($quotationQueryOption: QuotationQueryOption!) {
    getQuotations(quotationQueryOption: $quotationQueryOption) {
      id
      fileLink
      agentId
    }
  }
`;

export const getAgentQuery = gql`
  query getAgent($id: ID!) {
    getAgent(id: $id) {
      id
      name
    }
  }
`;

export const getEnquiryQuery = gql`
  query getEnquiry($id: String!) {
    getEnquiry(id: $id) {
      startDate
      adults
      children
    }
  }
`;

export const getCustomerEnquiriesQuery = gql`
  query getCustomerEnquiries($userId: String!) {
    getCustomerEnquiries(userId: $userId) {
      id
      destination {
        name
      }
      startDate
      adults
      children
      pickUpPoint
    }
  }
`;
