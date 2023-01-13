import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
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

const Wrap = styled.div`
  padding: 180px 200px;

`

export default function GraphqlMutationPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });


  return (
    <Wrap>
    <CommunityWriteUI isEdit={true} data={data} />
    </Wrap>
  )
}
