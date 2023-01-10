import { gql, useQuery } from "@apollo/client";

const FETCH_COMIC = gql`
  query fetchComic($comicId: String!) {
    fetchComic(comicId: $comicId) {
      title
      author
      publisher
      totalBooks
      description
      isAvailable
      rentalFee
      illustrator
      comicRating {
        totalRating
        comicRating
      }
    }
  }
`;

export const useQueryFetchComic = (comicId: string) => {
  const query = useQuery(FETCH_COMIC, {
    variables: {
      comicId,
    },
  });
  return query;
};
