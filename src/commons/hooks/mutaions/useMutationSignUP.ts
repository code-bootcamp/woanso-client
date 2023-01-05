import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationSignUpArgs } from "../../types/generated/types";

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
      nickname
    }
  }
`;

export const useMutationSignUp = () => {
  const mutation = useMutation<Pick<IMutation, "signUp">, IMutationSignUpArgs>(
    SIGN_UP
  );
  return mutation;
};
