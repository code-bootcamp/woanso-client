import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationLoginArgs } from "../../types/generated/types";

export const LOG_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const useMutationLogIn = () => {
  const mutation = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(
    LOG_IN
  );
  return mutation;
};
