import { gql } from '@apollo/client';

export const createEnquiryMutation = gql`
  mutation createEnquiry($input: CreateEnquiryInput!) {
    createEnquiry(input: $input) {
      id
    }
  }
`;

export const createQuotationMutation = gql`
  mutation createQuotation($input: CreateQuotationInput!) {
    createQuotation(input: $input) {
      id
    }
  }
`;
