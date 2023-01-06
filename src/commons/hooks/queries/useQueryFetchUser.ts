import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { getUserEmail } from "../../libraries/store";

export const FETCH_USER = gql`
  query fetchUser($email: String!) {
    fetchUser(email: $email) {
      id
      nickname
      email
      phone
      interest
      balance
      userImg
    }
  }
`;

// export const useQueryFetchUser = (email: string) => {
//   const query = useQuery(FETCH_USER, {
//     email,
//   });
//   return query;
// };
