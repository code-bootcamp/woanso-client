import styled from "@emotion/styled";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export const ModalWrap = styled(Modal)`
  .ant-modal-content {
    width: 416px;
  }

  .ant-modal-header {
    display: none;
  }

  .ant-modal-body {
    padding: 32px 32px 0;
  }

  .ant-modal-footer {
    border-top: 0;
    padding: 32px 32px 24px;
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

export const TextWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(ExclamationCircleOutlined)`
  color: #faad14;
  font-size: 22px;
`;

export const Text = styled.p`
  font-weight: 500;
  margin-left: 18px;
`;
