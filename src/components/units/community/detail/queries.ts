import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($id: String!) {
    fetchBoard(id: $id) {
      id
      content
      # boardImg {
      #   boardImgID
      #   url
      #   board {
      #     id
      #     boardImg
      #   }
      # }
      user {
        nickname
        thumbnail
      }
      boardImg{
        # boardImgID
        url
      }
      like
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($id: String!) {
    deleteBoard(id: $id)
  }
`;

export const LIKE_BOARD = gql`
  mutation likeBoard($id: String!) {
    likeBoard(id: $id)
  }
`;