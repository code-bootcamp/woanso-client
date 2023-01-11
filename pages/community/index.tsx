import CommunityListUI from "../../src/components/units/community/list";
import CommunityTrendUI from "../../src/components/units/community/trend";
import CommunityWriteUI from "../../src/components/units/community/write";
import ChatList from "../../src/components/units/chat/list";
import styled from "@emotion/styled";
import CommunityDeleteModal from "../../src/components/units/community/deleteModal";


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
    <CommunityDeleteModal/>
    </Wrap1>
    <Wrap2>
    <ChatList/>
    </Wrap2>
    </Wrap>
    )

}