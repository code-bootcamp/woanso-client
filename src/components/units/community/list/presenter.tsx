import InfiniteScroll from "react-infinite-scroller";
import CommunityListUI from "./presenterItem";

export default function CommunityBoardListUI(props: any) {
  if (!props.data) return <div />;
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoards.map((el: any) => (
        <CommunityListUI key={el.id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
