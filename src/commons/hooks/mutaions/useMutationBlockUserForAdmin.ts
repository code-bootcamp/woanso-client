import { gql, useMutation } from "@apollo/client";

const BLOCK_USER_FOR_ADMIN = gql`
  mutation blockUserForAdmin($email: String!) {
    blockUserForAdmin(email: $email)
  }
`;

export const useMutationBlockUserForAdmin = () => {
  const mutation = useMutation(BLOCK_USER_FOR_ADMIN);
  return mutation;
};
