import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommunityWriteUI from "../../../../src/components/units/community/write";

const FETCH_BOARD = gql`
  query fetchBoard($id: String!) {
    fetchBoard(id: $id) {
      id
      content
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <CommunityWriteUI isEdit={true} data={data} />;
}
