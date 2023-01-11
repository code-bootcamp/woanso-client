import { gql, useMutation } from "@apollo/client";

const CREATE_WISHLIST = gql`
  mutation createWishlist($createWishInput: CreateWishInput!) {
    createWishlist(createWishInput: $createWishInput)
  }
`;

export const useMutationCreateWishList = () => {
  const mutation = useMutation(CREATE_WISHLIST);
  return mutation;
};

//  const [createWishlist] = useMutationCreateWishList();
