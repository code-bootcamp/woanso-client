import styled from "@emotion/styled";
import { Modal } from "antd";

export const InFoWrap = styled.div`
  padding: 10px 0;
  color: #000;
`;

export const Titles = styled.div`
  padding-left: 25px;
`;

export const ModalWrap = styled(Modal)`
  .ant-modal {
    z-index: 100;
  }

  .ant-modal-content {
    width: 700px;
    padding: 15px;
  }

  .anticon-close {
    display: none;
  }

  .ant-modal-footer {
    border-top: 0;
  }

  .ant-btn-default {
    border: none;
    background-color: #f5efe3;
    color: #000;
    :hover {
      color: #77170d;
    }
  }
`;
export const UlList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const AskTable = styled.div`
  display: flex;
  gap: 5px;
  margin-left: 25px;
`;
export const AskKaKao = styled.h2`
  :hover {
    color: #77170d;
  }
  font-weight: 600;
`;
