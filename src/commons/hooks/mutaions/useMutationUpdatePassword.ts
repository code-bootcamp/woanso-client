import { gql, useMutation } from "@apollo/client";

const UPDATE_PASSWORD = gql`
  mutation updatePassword(
    $email: String!
    $phone: String!
    $newPassword: String!
  ) {
    updatePassword(email: $email, phone: $phone, newPassword: $newPassword)
  }
`;

export const useMutationUpdatePassword = () => {
  const mutation = useMutation(UPDATE_PASSWORD);
  return mutation;
};
