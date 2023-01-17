import { gql } from "@apollo/client";

export const FETCH_COMMENTS = gql`
  query fetchComments($page: Float, $order: String, $boardId: String!){
    fetchComments(page: $page, order: $order, boardId: $boardId) {
      id
      content
      createdAt
      user{
        nickname
        id
        thumbnail
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($ID: String!) {
    deleteComment(ID: $ID)
  }
`;
