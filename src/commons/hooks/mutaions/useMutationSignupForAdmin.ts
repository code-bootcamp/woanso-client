import { gql, useMutation } from "@apollo/client";

export const SIGNUP_FOR_ADMIN = gql`
  mutation signUpForAdmin(
    $email: String!
    $password: String!
    $nickname: String!
    $phone: String!
  ) {
    signUpForAdmin(
      email: $email
      password: $password
      nickname: $nickname
      phone: $phone
    ) {
      id
    }
  }
`;

export const useMutationSignUpForAdmin = () => {
  const mutation = useMutation(SIGNUP_FOR_ADMIN);
  return mutation;
};
