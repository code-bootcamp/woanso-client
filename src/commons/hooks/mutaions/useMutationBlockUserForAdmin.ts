import { gql, useMutation } from "@apollo/client";

export const BLOCK_USER_FOR_ADMIN = gql`
  mutation blockUserForAdmin($email: String!) {
    blockUserForAdmin(email: $email)
  }
`;

interface IPropsType {
  email: string;
}

export const useMutationBlockUserForAdmin = (props: IPropsType) => {
  const mutation = useMutation(BLOCK_USER_FOR_ADMIN, {
    variables: {
      email: props.email,
    },
  });
  return mutation;
};
