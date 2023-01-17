import { Button, Modal } from "antd";
import { useState } from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { PopupModal } from "../../../../commons/libraries/store";



export default function CommunityModal1(props: any){
    
    const [isModalOpen, setIsModalOpen] = useRecoilState(PopupModal);

    const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

    return (
        <>
        { isModalOpen && <ModalCustom
              width="1100px"
              open={true}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Wrap>게시글이 등록되었습니다.</Wrap>
            </ModalCustom>}
            </>
    )
}

const Wrap = styled.div``

const ModalCustom = styled(Modal)`
  .ant-modal-header {
    padding: 0px 24px 16px 24px;
    background-color: black;
    color: white;
    text-align: center;
    border-radius: 2px 2px 0 0;
    height: 80px;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: row;
align-items: center;
padding: 16px 24px;
gap: 24px;
position: relative;
width: 262px;
height: 56px;
background: #EFE7D7;
border-radius: 16px;
top: 10px;
left: 400px;
  }
  .ant-modal-title {
    color: #fff;
  }
  .ant-modal-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
  }
  .ant-modal-footer > .ant-btn-primary {
    display: none;
  }
  .ant-modal-footer > .ant-btn-default {
    display: none;
  }
  .ant-modal-close-x {
    /* display: none; */
  }
`