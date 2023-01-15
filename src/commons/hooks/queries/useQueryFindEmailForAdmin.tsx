import { gql, useQuery } from "@apollo/client";

const FIND_EMAIL_FOR_ADMIN = gql`
  query findEmailForAdmin($email: String!) {
    findEmailForAdmin(email: $email) {
      id
      email
    }
  }
`;

export const useQueryEindEmailForAdmin = (email: any) => {
  const query = useQuery(FIND_EMAIL_FOR_ADMIN, {
    variables: { email },
  });
  return query;
};
