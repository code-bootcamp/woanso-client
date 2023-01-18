import { gql, useQuery } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($order: String) {
    fetchBoards(order: $order) {
      id
      content
      like
      dislike
      createdAt
      boardImg {
        boardImgID
        url
      }
      user {
        id
        nickname
      }
    }
  }
`;

export const useQueryFetchBoards = () => {
  const query = useQuery(FETCH_BOARDS, {
    variables: {
      order: "DESC",
    },
  });
  return query;
};
