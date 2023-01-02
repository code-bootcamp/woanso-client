import styled from "@emotion/styled";
import { Modal } from "antd";

export const ModalInnerWrap = styled.div``;

export const ModalWrap = styled(Modal)`
  .ant-modal-content {
    width: 1000px;
  }

  .ant-modal-footer {
    padding: 0 24px 24px 24px;
  }

  .ant-btn-default {
    border: none;
    background-color: #f5efe3;
    font-weight: 500;
    :hover {
      color: #77170d;
    }
  }

  .ant-btn-primary {
    border: none;
    background-color: #f5efe3;
    color: #000;
    :hover {
      color: #77170d;
    }
  }
`;
