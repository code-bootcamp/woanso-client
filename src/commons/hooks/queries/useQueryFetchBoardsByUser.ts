import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS_BYUSER = gql`
  query fetchBoardsByUser {
    fetchBoardsByUser {
      id
      # boardImg {
      #   url
      # }
    }
  }
`;

export const useQueryFetchBoardsByUser = () => {
  const query = useQuery(FETCH_BOARDS_BYUSER);
  return query;
};
