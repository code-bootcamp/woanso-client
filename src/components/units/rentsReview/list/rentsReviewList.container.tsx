import { useQueryFetchReviews } from "../../../../commons/hooks/queries/useQueryFetchReviews";
import RentsReviewListUI from "./rentsReviewList.presenter";

export default function RentsReviewList() {
  const { data } = useQueryFetchReviews();
  console.log("fetchReviews", data);
  return (
    <>
      {data?.fetchReviews.map((el: any) => (
        <RentsReviewListUI key={el.reviewId} el={el} />
      ))}
    </>
  );
}
