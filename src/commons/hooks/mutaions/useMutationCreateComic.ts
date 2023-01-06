import { gql, useMutation } from "@apollo/client";

export const CREATE_COMIC = gql`
  mutation createComic($createComicInput: CreateComicInput!) {
    createComic(createComicInput: $createComicInput) {
      comicId
      title
      deliveryFee
      rentalFee
    }
  }
`;


export const useMutationCreateComic = () => {
    const mutation = useMutation(CREATE_COMIC);
    return mutation;
}
