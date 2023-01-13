import { gql, useMutation } from "@apollo/client";

const CREATE_POINT_TRANSACTION = gql`
mutation createPointTransaction($impUid: String!, $comicId: String!, $amount: Int!) {
  createPointTransaction(impUid: $impUid, comicId: $comicId, amount: $amount) {
    id
  }
}
`;


export const useMutationcreatePointTransaction = () => {
    const mutation = useMutation(CREATE_POINT_TRANSACTION);
    return mutation;
  };