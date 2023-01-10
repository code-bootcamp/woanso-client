import { Button, Modal } from "antd";
import { useState } from "react";
import styled from "@emotion/styled";



export default function CommunityModal(){
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

    const onClickWriteReview = async (e) => {
        setIsModalOpen(true);
        setTimeout(function(){ setIsModalOpen(false);}, 3000);
      };


    return (
        <>
        <Button onClick={onClickWriteReview}>모달</Button>

        { isModalOpen && <ModalCustom
              width="1100px"
              open={true}
              onOk={handleOk}
              onCancel={handleCancel}
            >
    
            </ModalCustom>}
            </>
    )
}

const ModalCustom = styled(Modal)`
  .ant-modal-header {
    padding: 0px 24px 16px 24px;
    background-color: black;
    color: white;
    text-align: center;
    border-radius: 2px 2px 0 0;
    height: 80px;
  }
  .ant-modal-body {
    padding-top: 10px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
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
    /* display: none; */
  }
  .ant-modal-footer > .ant-btn-default {
    /* display: none; */
  }
  .ant-modal-close-x {
    /* display: none; */
  }
`