import { gql, useQuery } from "@apollo/client";

export const FETCH_COMICS_WITH_TITLE = gql`
  query fetchComicsWithTitle($title: String!, $page: Float!) {
    fetchComicsWithTitle(title: $title, page: $page) {
      title
      comicId
      ISBN
    }
  }
`;

export const useQueryFetchComicsWithTitle = (title: string) => {
  const query = useQuery(FETCH_COMICS_WITH_TITLE, {
    variables: {
      title,
      page: 1,
    },
  });
  return query;
};
