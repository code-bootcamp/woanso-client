import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadOneFile($file: [Upload!]!) {
    uploadOneFile(file: $file)
  }
`;

export const useMutationUploadFile = () => {
  const mutation = useMutation(UPLOAD_FILE);
  return mutation;
};
