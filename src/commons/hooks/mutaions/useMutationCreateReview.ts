import { gql, useMutation } from "@apollo/client";

const CREATE_REVIEW = gql`
  mutation createReview($createReviewInput: CreateReviewInput!) {
    createReview(createReviewInput: $createReviewInput) {
      reviewId
      content
      like
      user {
        id
        nickname
      }
    }
  }
`;

export const useMutationCreateReview = () => {
  const mutation = useMutation(CREATE_REVIEW);
  return mutation;
};
