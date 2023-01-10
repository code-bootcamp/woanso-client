import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery,  IQueryFetchCommentsArgs} from "../../../commons/types/generated/types";
import BoardCommentListUI from "./presenter";
import { FETCH_COMMENTS } from "./queries";

export default function CommunityCommentListUI(){
    const router = useRouter();

    const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchComments">,
    IQueryFetchCommentsArgs
  >(FETCH_COMMENTS, {
    variables: { id: router.query.boardId },
  });

  

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchComments)
          return { fetchComments: [...prev.fetchComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchComments,
            ...fetchMoreResult.fetchComments,
          ],
        };
      },
    });
  };    

    return (
        <BoardCommentListUI data={data} onLoadMore={onLoadMore}/>
    )
}