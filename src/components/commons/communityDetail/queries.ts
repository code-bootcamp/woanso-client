import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($id: String!) {
    fetchBoard(id: $id) {
      id
      content
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($id: String!) {
    deleteBoard(id: $id)
  }
`;