import { PhoneFilled } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser($email: String!, $updateUserInput: UpdateUserInut!) {
    updateUser(email: $email, updateUserInut: $updateUserInut) {
      id
      nickname
      email
      phone
      interest
      balance
      userImg
    }
  }
`;

export const useMutationUpdateUser = () => {
  const mutation = useMutation(UPDATE_USER);
  return mutation;
};
