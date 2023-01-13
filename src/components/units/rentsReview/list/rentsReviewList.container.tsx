import { useQueryFetchReview } from "../../../../commons/hooks/queries/useQueryFetchReview";
import RentsReviewListUI from "./rentsReviewList.presenter";

export default function RentsReviewList({ comicId }: any) {
  const { data } = useQueryFetchReview(comicId);
  console.log("fetchReview", data);
  return (
    <>
      {data?.fetchReview.map((el: any) => (
        <RentsReviewListUI key={el.reviewId} el={el} />
      ))}
    </>
  );
}
