import CommunityDetailUI from "../../../src/components/units/community/detail";
import styled from "@emotion/styled";
import CommunityCommentUI from "../../../src/components/units/comment/list/container";
import CommunityCommentListUI from "../../../src/components/units/comment/list/container";
import CommunityCommentWriteUI from "../../../src/components/units/comment/write";
import CommunityModal1 from "../../../src/components/units/community/modal";


const Wrap = styled.div`
padding-top: 180px;
margin: 0 auto;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

export default function BoardDetailPage(){
    return (
        <Wrap>
       <CommunityDetailUI/>
       <CommunityCommentListUI/>
       <CommunityModal1/>
       </Wrap>
    )
}