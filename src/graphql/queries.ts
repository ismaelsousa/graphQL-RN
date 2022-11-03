import gql from 'graphql-tag';

export const GET_COUNTRIES_QUERY = gql`
  query {
    allLifts {
      id
      status
      capacity
    }
  }
`;
