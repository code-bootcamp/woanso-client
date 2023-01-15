import { gql, useQuery } from "@apollo/client";

const AVAILABLE_COMICS_FOR_ADMIN = gql`
  query availableComicsForAdmin {
    availableComicsForAdmin
  }
`;

export const useQueryAvailableComicsForAdmin = () => {
  const query = useQuery(AVAILABLE_COMICS_FOR_ADMIN);
  return query;
};
