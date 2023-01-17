import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Payment from "../../../src/components/units/payment/payment.container";

const FETCH_COMIC = gql`
  query fetchComic($comicId: String!) {
    fetchComic(comicId: $comicId) {
      title
      author
      publisher
      totalBooks
      description
      isAvailable
      rentalFee
      deliveryFee
      illustrator
      comicRating {
        totalRating
        comicRating
      }
      ISBN
      comicId
    }
  }
`;

export default function PaymentPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_COMIC, {
    variables: { comicId: router.query.boardId },
  });
  return <Payment data={data} />;
}
