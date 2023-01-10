import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($id: String!) {
    fetchBoard(id: $id) {
      id
      content
      like
      dislike
      boardImg {
        url
      }
      user {
        id
        nickname
      }
    }
  }
`;

export const useQueryFetchBoard = (id) => {
  const query = useQuery(FETCH_BOARD, {
    variables: {
      id,
    },
  });
  return query;
};
