import { gql, useQuery } from "@apollo/client";

const FETCH_ALL_COMMENTS = gql`
  query fetchAllComments($page: Float, $order: String) {
    fetchAllComments(page: $page, order: $order) {
      content
      user {
        id
      }
    }
  }
`;

export const useQueryFetchAllComments = () => {
  const query = useQuery(FETCH_ALL_COMMENTS, {
    variables: {
      page: 1,
      order: "DESC",
    },
  });
  return query;
};
