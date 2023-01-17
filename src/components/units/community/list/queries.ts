import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Float, $order: String) {
    fetchBoards(page: $page, order: $order) {
      id
      content
      like
      boardImg{
        boardImgID
        url
      }
    }
  }
`;