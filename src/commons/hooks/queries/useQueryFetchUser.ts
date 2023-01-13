import { gql, useQuery } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser($email: String!) {
    fetchUser(email: $email) {
      id
      nickname
      email
      phone
      interest
      thumbnail
      # pointTransaction {
      #   impUid
      # }
    }
  }
`;

// export const useQueryFetchUser = (email: string) => {
//   const query = useQuery(FETCH_USER, {
//     email,
//   });
//   return query;
// };
