import { gql, useMutation } from "@apollo/client";

const UPDATE_PASSWORD = gql`
  mutation updatePassword($email: String!, $updateUserPwdInput: String!) {
    updatePassword(email: $email, updateUserPwdInput: $updateUserPwdInput)
  }
`;

export const useMutationUpdatePassword = () => {
  const mutation = useMutation(UPDATE_PASSWORD);
  return mutation;
};
