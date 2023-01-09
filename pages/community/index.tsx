import CommunityListUI from "../../src/components/commons/communityList";
import CommunityTrendUI from "../../src/components/commons/communityTrend";
import CommunityWriteUI from "../../src/components/commons/communityWrite";
import ChatList from "../../src/components/units/chat/list";
import styled from "@emotion/styled";


const Wrap = styled.div`
display: flex;
`

const Wrap1 = styled.div`
display: flex;
flex-direction: column;
padding: 0 200px;
`

const Wrap2 = styled.div``


export default function CommunityPage(){
    return (
        <Wrap>
    <Wrap1>
    <CommunityTrendUI/>
    <CommunityWriteUI/>
    <CommunityListUI/>    
    </Wrap1>
    <Wrap2>
    <ChatList/>
    </Wrap2>
    </Wrap>
    )

}