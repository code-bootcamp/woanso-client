import styled from "@emotion/styled";
import { Modal } from "antd";

export const ModalInnerWrap = styled.div``;

export const TextBox = styled.div`
  font-size: 16px;

  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #77170d;
`;

export const Text = styled.p`
  color: #ffffff;
  padding: 5px 20px;
`;

export const Input = styled.input`
  width: 100%;
  border: 3px solid #f5efe3;
  background-color: #f5efe3;
  padding: 10px 20px;
`;

export const ModalWrap = styled(Modal)`
  .ant-modal-content {
    width: 300px;
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
