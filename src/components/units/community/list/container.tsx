import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import CommunityBoardListUI from "./presenter";
import { FETCH_BOARDS } from "./queries";

export default function CommunityList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  console.log(data);

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (
        prev: Pick<IQuery, "fetchBoards">,
        { fetchMoreResult }
      ) => {
        if (!fetchMoreResult?.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [
            ...prev.fetchBoards,
            ...fetchMoreResult.fetchBoards,
          ],
        };
      },
    });
  };

  return <CommunityBoardListUI data={data} onLoadMore={onLoadMore} />;
}
