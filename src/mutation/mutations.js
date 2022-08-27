import { gql } from '@apollo/client';
export const createEnquiryMutation = gql`
  mutation createEnquiry($input: CreateEnquiryInput!) {
    createEnquiry(input: $input) {
      id
    }
  }
`;
