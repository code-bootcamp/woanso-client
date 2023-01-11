import { gql, useMutation } from "@apollo/client";

const UPLOAD_COMICIMG = gql`
  mutation uploadComicImg($url: [String!]!, $comicId: String!) {
    uploadComicImg(url: $url, comicId: $comicId) {
      url
    }
  }
`;

export const useMutationUploadComicImg = () => {
  const mutation = useMutation(UPLOAD_COMICIMG);
  return mutation;
};
