import { gql, useMutation } from "@apollo/client";

const UPLOAD_ONEFILE = gql`
  mutation uploadOneFile($file: Upload!) {
    uploadOneFile(file: $file)
  }
`;

export const useMutationUploadOneFile = () => {
  const mutation = useMutation(UPLOAD_ONEFILE);
  return mutation;
};
