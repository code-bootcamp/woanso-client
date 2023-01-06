import { gql, useQuery } from "@apollo/client";

export const FIND_EMAIL = gql`
  query findEmail($phone: String!) {
    findEmail(phone: $phone) {
      id
      email
    }
  }
`;

// export const useQueryFindEmail = (props: number) => {
//   const query = useQuery(FIND_EMAIL, {
//     variables: {
//       phone: String(props.phone),
//     },
//   });
//   return query;
// };
