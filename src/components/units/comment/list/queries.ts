import { gql } from "@apollo/client";

export const FETCH_COMMENTS = gql`
  query fetchComments($page: Float, $order: String){
    fetchComments(page: $page, order: $order) {
      id
      content
      createdAt
      user{
        nickname
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($ID: String!) {
    deleteComment(ID: $ID)
  }
`;
