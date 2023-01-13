import { gql, useQuery } from "@apollo/client";

export const FETCH_WISHLIST = gql`
  query fetchWishlist {
    fetchWishlist {
      wishlistId
      isDib
      comic {
        comicId
        title
        author
        ISBN
        isAvailable
      }
    }
  }
`;

export const useQueryFetchWishlist = () => {
  const query = useQuery(FETCH_WISHLIST);
  return query;
};

// const {data} = useQueryFetchWishlist()
