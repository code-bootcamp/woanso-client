import InfiniteScroll from "react-infinite-scroller";
import CommunityCommentListUIItem from "./presenterItem";

export default function BoardCommentListUI(props: any) {
  if (!props.data) return <div />;
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchComments.map((el: any) => (
        <CommunityCommentListUIItem key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
