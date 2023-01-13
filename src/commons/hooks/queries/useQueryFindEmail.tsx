import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";

const FIND_EMAIL = gql`
  query findEmail($phone: String!) {
    findEmail(phone: $phone) {
      id
      email
    }
  }
`;

export const useQueryEindEmail = (phone: any) => {
  const query = useQuery(FIND_EMAIL, {
    variables: { phone },
  });
  return query;
};
