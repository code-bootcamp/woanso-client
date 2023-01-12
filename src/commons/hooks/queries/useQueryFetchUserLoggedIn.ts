import { gql, useQuery } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      id
      nickname
      email
      phone
      interest
      thumbnail
      # comment
      # review
      # reviewLike
      # boardDislike
      # boardlLike
      # board
      # wishlist
      # pointTransaction
    }
  }
`;

export const useQueryFetchUserLoggendIn = () => {
  const query = useQuery(FETCH_USER_LOGGED_IN);
  return query;
};
