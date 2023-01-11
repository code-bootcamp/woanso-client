import CommunityDetailUI from "../../../src/components/commons/communityDetail";
import styled from "@emotion/styled";
import CommunityCommentUI from "../../../src/components/commons/communityCommentList/container";
import CommunityCommentListUI from "../../../src/components/commons/communityCommentList/container";
import CommunityCommentWriteUI from "../../../src/components/commons/communityCommentWrite";
import CommunityModal1 from "../../../src/components/commons/communityModal";


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