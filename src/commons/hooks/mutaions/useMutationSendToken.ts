import { gql, useMutation } from "@apollo/client";

const SEND_TOKEN = gql`
  mutation sendToken($phone: String!) {
    sendToken(phone: $phone)
  }
`;

export const useMutationSendToken = () => {
  const mutation = useMutation(SEND_TOKEN);
  return mutation;
};
