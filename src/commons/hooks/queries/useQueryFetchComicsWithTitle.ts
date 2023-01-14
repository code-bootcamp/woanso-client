import { gql, useQuery } from "@apollo/client";

const FETCH_COMICS_WITH_TITLE = gql`
  query fetchComicsWithTitle($title: String!, $page: Float!) {
    fetchComicsWithTitle(title: $title, page: $page) {
      cominId
      #   title
      #   ISBN
    }
  }
`;

export const useQueryFetchComicsWithTitle = (title: any) => {
  const query = useQuery(FETCH_COMICS_WITH_TITLE, {
    variables: {
      title,
      page: 1,
    },
  });
  return query;
};
