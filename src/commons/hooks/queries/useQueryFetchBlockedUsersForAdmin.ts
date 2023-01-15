import { gql, useQuery } from "@apollo/client";

export const FETCH_BLOCKED_USERS_FOR_ADMIN = gql`
  query fetchBlockedUsersForAdmin {
    fetchBlockedUsersForAdmin {
      id
      nickname
      email
      phone
      interest
    }
  }
`;

export const useQueryFetchBlockedUsersForAdmin = () => {
  const query = useQuery(FETCH_BLOCKED_USERS_FOR_ADMIN);
  return query;
};
