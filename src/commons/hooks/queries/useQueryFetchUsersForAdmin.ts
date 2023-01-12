import { gql, useQuery } from "@apollo/client";

const FETCH_USERS_FOR_ADMIN = gql`
  query fetchUsersForAdmin {
    fetchUsersForAdmin {
      id
      nickname
      email
      phone
      interest
    }
  }
`;

export const useQueryFetchUsersForAdmin = () => {
  const query = useQuery(FETCH_USERS_FOR_ADMIN);
  return query;
};
