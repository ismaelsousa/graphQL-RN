import gql from 'graphql-tag';

export const SET_LIFT_STATUS_MUTATION = gql`
  mutation setLiftStatus($id: ID!, $status: LiftStatus!) {
    setLiftStatus(id: $id, status: $status) {
      id
      status
      capacity
    }
  }
`;
