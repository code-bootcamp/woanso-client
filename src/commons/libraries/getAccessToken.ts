import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

export const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken
  }
`;

export const RESTORE_ACCESS_TOKEN_FOR_ADMIN = gql`
  mutation {
    restoreAccessTokenForAdmin
  }
`;

export const getAccessToken = async () => {
  // 관리자 로그인시 토큰 발급
  // if (ACCESS_TOKEN === RESTORE_ACCESS_TOKEN_FOR_ADMIN) {
  //   try {
  //     const graphQLClient = new GraphQLClient(
  //       "https://examplezi.shop/graphql",
  //       {
  //         credentials: "include",
  //       }
  //     );
  //     const result = await graphQLClient.request(
  //       RESTORE_ACCESS_TOKEN_FOR_ADMIN
  //     );
  //     const newAccessToken = result.restoreAccessTokenForAdmin;
  //     return newAccessToken; // 받은 newAccessToken을 넘겨주기
  //   } catch (error) {
  //     if (error instanceof Error) console.log(error.message);
  //   }
  // } else if (ACCESS_TOKEN === RESTORE_ACCESS_TOKEN) {
    try {
      const graphQLClient = new GraphQLClient(
        "https://examplezi.shop/graphql",
        {
          credentials: "include",
        }
      );
      const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
      const newAccessToken = result.restoreAccessToken;
      return newAccessToken; // 받은 newAccessToken을 넘겨주기
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  // } else {
  //   return;
  // }
};
