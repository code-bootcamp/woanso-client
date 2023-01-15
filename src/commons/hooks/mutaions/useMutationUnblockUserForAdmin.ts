import { gql, useMutation } from "@apollo/client";

const UNBLOCK_USER_FOR_ADMIN = gql`
  mutation unblockUserForAdmin($email: String!) {
    unblockUserForAdmin(email: $email)
  }
`;

export const useMutationUnblockUserForAdmin = () => {
  const mutation = useMutation(UNBLOCK_USER_FOR_ADMIN);
  return mutation;
};
