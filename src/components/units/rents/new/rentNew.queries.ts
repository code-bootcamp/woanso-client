import { gql } from "@apollo/client";

export const CREATE_COMIC = gql`
  mutation createComic($createComicInput: CreateComicInput!) {
    createComic(createComicInput: $createComicInput) {
      comicId
      title
      deliveryFee
      rentalFee
      author
      illustrator
      publisher
      totalBooks
      description
      ISBN
      wishListCount
      comicRating {
        comicRatingId
        totalRating
        comicRating
      }
    }
  }
`;
