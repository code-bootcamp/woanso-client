import { gql, useMutation } from "@apollo/client";

const DELETE_REVIEW = gql`
  mutation deleteReview($reviewId: ID!) {
    deleteReview(reviewId: $reviewId)
  }
`;

export const useMutationDeleteReview = () => {
  const mutation = useMutation(DELETE_REVIEW);
  return mutation;
};
