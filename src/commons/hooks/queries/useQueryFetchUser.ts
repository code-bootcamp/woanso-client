import { gql, useQuery } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser($email: String!) {
    fetchUser(email: $email) {
      id
      nickname
      email
      phone
      interest
      balance
    }
  }
`;

interface IPropsType {
  email: string;
}

export const useQueryFetchUser = ({ email }: IPropsType) => {
  const query = useQuery(FETCH_USER, {
    variables: { email: String(email) },
  });
  return query;
};
