import { gql, useQuery } from "@apollo/client";

export const FETCH_REVIEW = gql`
  query fetchReview($comicId: String!) {
    fetchReview(comicId: $comicId) {
      reviewId
      content
      like
      createdAt
      rating
      user {
        nickname
        thumbnail
      }
      comic {
        comicId
      }
    }
  }
`;

export const useQueryFetchReview = (comicId: string) => {
  const query = useQuery(FETCH_REVIEW, {
    variables: {
      comicId,
    },
  });
  return query;
};
