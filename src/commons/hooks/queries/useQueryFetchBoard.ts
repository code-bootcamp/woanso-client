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

interface IPropsType {
  id: string;
}

export const useQueryFetchBoard = (id: IPropsType) => {
  const query = useQuery(FETCH_BOARD, {
    variables: {
      id,
    },
  });
  return query;
};
