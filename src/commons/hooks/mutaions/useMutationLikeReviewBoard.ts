import { gql, useMutation } from "@apollo/client";

const LIKE_REVIEW_BOARD = gql`
  mutation likeReviewBoard($reviewId: String!) {
    likeReviewBoard(reviewId: $reviewId)
  }
`;

export const useMutionLikeReviewBoard = () => {
  const mutation = useMutation(LIKE_REVIEW_BOARD);
  return mutation;
};
