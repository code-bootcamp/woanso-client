import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken
  }
`;
export const getAccessToken = async () => {
  try {
    const graphQLClient = new GraphQLClient("https://examplezi.shop/graphql", {
      credentials: "include",
    });
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken;
    return newAccessToken; // 받은 newAccessToken을 넘겨주기
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
