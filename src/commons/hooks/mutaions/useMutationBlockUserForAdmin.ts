import { gql, useMutation } from "@apollo/client";

export const BLOCK_USER_FOR_ADMIN = gql`
  mutation blockUserForAdmin($email: String!) {
    blockUserForAdmin(email: $email)
  }
`;

export const useMutationBlockUserForAdmin = (props) => {
  const mutation = useMutation(BLOCK_USER_FOR_ADMIN, {
    variables: {
      email: props.email,
    },
  });
  return mutation;
};
