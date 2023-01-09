import { gql } from "@apollo/client";

export const FETCH_COMICS = gql`
  query fetchComics {
    fetchComics {
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
      isAvailable
      wishListCount
      comicRating {
        comicRatingId
        totalRating
        comicRating
      }
      # category {
      #   romance
      #   drama
      #   fantasy
      #   action
      #   school
      #   horror
      # }
    }
  }
`;
