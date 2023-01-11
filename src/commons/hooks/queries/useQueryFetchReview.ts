import { gql, useQuery } from "@apollo/client";

export const FETCH_REVIEW = gql`
  query fetchReview($freviewId: String!) {
    fetchReview(freviewId: $freviewId) {
      reviewId
      content
      like
      user {
        nickname
      }
      comicRating {
        comicRating
      }
    }
  }
`;

export const useQueryFetchReview = () => {
  const query = useQuery(FETCH_REVIEW);
  return query;
};
