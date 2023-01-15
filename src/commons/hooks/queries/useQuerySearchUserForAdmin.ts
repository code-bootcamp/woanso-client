import { gql, useQuery } from "@apollo/client";

export const SEARCH_USER_FOR_ADMIN = gql`
  query searchUserForAdmin($nickname: String!, $page: Float!) {
    searchUserForAdmin(nickname: $nickname, page: page) {
      id
      nickname
      email
      phone
      interest
      board {
        id
        content
      }
    }
  }
`;

export const useQuerySearchUserForAdmin = (nickname: string) => {
  const query = useQuery(SEARCH_USER_FOR_ADMIN, {
    variables: {
      nickname,
      page: 1,
    },
  });
  return query;
};
