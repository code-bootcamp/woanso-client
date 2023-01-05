import { gql, useMutation } from "@apollo/client";

export const SIGN_UP = gql`
  mutation signUp(
    $email: String!
    $password: String!
    $nickname: String!
    $phone: String!
    $interest: String!
  ) {
    signUp(
      email: $email
      password: $password
      nickname: $nickname
      phone: $phone
      interest: $interest
    ) {
      id
    }
  }
`;

export const useMutationSignUp = () => {
  const mutation = useMutation(SIGN_UP);
  return mutation;
};
