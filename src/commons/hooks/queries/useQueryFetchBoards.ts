import { gql, useQuery } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Float, $order: String) {
    fetchBoards(page: $page, order: $order) {
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
      page: 1,
      oeder: "DESC",
    },
  });
  return query;
};

// const { data } = useQueryFetchBoards();
// console.log(data?.fetchBoards);
