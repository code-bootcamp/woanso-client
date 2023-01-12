import { PhoneFilled } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser($email: String!, $updateUserInput: UpdateUserInput!) {
    updateUser(email: $email, updateUserInput: $updateUserInput) {
      id
      nickname
      email
      phone
      interest
      thumbnail
    }
  }
`;

export const useMutationUpdateUser = () => {
  const mutation = useMutation(UPDATE_USER);
  return mutation;
};
