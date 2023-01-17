import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IComment,
  IQuery,
  IQueryFetchCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./presenter";
import { FETCH_COMMENTS } from "./queries";

export default function CommunityCommentListUI() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchComments">,
    IQueryFetchCommentsArgs
  >(FETCH_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchComments.length / 10) + 1 },
      updateQuery: (
        prev: Pick<IQuery, "fetchComments">,
        { fetchMoreResult }
      ) => {
        if (!fetchMoreResult?.fetchComments)
          return { fetchComments: [...prev.fetchComments] };
        return {
          fetchComments: [
            ...prev.fetchComments,
            ...fetchMoreResult.fetchComments,
          ],
        };
      },
    });
  };

  return <BoardCommentListUI data={data} onLoadMore={onLoadMore} />;
}
