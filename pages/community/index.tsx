import CommunityListUI from "../../src/components/units/community/list/presenterItem";
import CommunityTrendUI from "../../src/components/units/community/trend";
import CommunityWriteUI from "../../src/components/units/community/write";
// import ChatList from "../../src/components/units/chat/list";
import styled from "@emotion/styled";
import CommunityDeleteModal from "../../src/components/units/community/deleteModal";
import CommunityList from "../../src/components/units/community/list/container";

const Wrap = styled.div`
 display: flex;
`;

const Wrap1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 200px;
  margin: auto;
`;

const Wrap2 = styled.div``;

export default function CommunityPage() {
  return (
    <Wrap>
      <Wrap1>
        <CommunityTrendUI />
        <CommunityWriteUI />
        <CommunityList/>
        <CommunityDeleteModal />
      </Wrap1>
    </Wrap>
  );
}
