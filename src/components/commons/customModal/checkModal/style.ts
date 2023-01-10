import styled from "@emotion/styled";
import { Modal } from "antd";

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
    padding: 32px 80px;
  }

  .ant-btn-default {
    display: none;
  }

  .ant-btn-primary {
    border: none;
    width: 100%;
    color: #ffffff;
    background-color: #77170d;
    border-radius: 10px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: #333333;
`;

export const SubText = styled.p`
  font-size: 1rem;
  color: #888888;
`;
