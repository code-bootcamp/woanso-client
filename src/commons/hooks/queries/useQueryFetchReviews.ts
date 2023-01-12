import { gql, useQuery } from "@apollo/client";

export const FETCH_REVIEWS = gql`
  query fetchReviews {
    fetchReviews {
      reviewId
      content
      like
      user {
        nickname
      }
      # comicRating {
      #   comicRating
      # }
    }
  }
`;

export const useQueryFetchReviews = () => {
  const query = useQuery(FETCH_REVIEWS);
  return query;
};
