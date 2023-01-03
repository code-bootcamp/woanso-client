import styled from "@emotion/styled";
import { Modal } from "antd";

export const ModalInnerWrap = styled.div``;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #8a342e;
  color: #ffffff;
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  font-weight: 500;
  padding: 0.5rem 1rem;
`;

export const Input = styled.input`
  width: 100%;
  background-color: #f5efe3;
  color: #333;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
`;

export const ModalWrap = styled(Modal)`
  .ant-modal-content {
    width: 416px;
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
