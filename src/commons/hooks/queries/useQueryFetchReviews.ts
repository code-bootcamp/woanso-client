import { gql, useQuery } from "@apollo/client";

const FETCH_REVIEWS = gql`
  query fetchReviews {
    fetchReviews {
      reviewId
      content
      like
      user {
        nickname
      }
    }
  }
`;

export const useQueryFetchReviews = () => {
  const query = useQuery(FETCH_REVIEWS);
  return query;
};
