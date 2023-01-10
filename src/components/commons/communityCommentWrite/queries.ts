import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment(
    $createCommentInput: CreateBoardCommentInput!
  ) {
    createComment(
      createCommentInput: $createCommentInput
    ) {
      id
    }
  }
`;