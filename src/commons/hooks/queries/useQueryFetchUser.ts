import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUserArgs } from "../../types/generated/types";

export const FETCH_USER = gql`
  query fetchUser($email: String!) {
    fetchUser(email: $email) {
      id
      nickname
      balance
    }
  }
`;

export const useQueryFetchUser = (email: any) => {
  const query = useQuery<Pick<IQuery, "fetchUser">, IQueryFetchUserArgs>(
    FETCH_USER,
    {
      variables: {
        email,
      },
    }
  );

  return query;
};
