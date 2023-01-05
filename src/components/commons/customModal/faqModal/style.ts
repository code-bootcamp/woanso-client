import styled from "@emotion/styled";
import { Modal } from "antd";

export const ModalInnerWrap = styled.div``;

export const Title = styled.h1``;

export const ListWrap = styled.ul`
  padding: 0;
`;

export const List = styled.li`
  list-style: none;
`;

export const Qustion = styled.div`
  padding: 10px 0;
  cursor: pointer;
  color: #000;
  border-bottom: 1px solid #77170d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.p`
  color: #000;
  display: flex;
`;

export const Qmark = styled.div`
  color: #fff;
  background-color: #77170d;
  padding: 0 5px;
  border-radius: 50%;
  margin-right: 14px;
`;

export const Answer = styled.div`
  line-height: 30px;
  padding: 20px 0 20px;
`;

export const ModalWrap = styled(Modal)`
  .ant-modal {
    z-index: 100;
  }

  .ant-modal-content {
    width: 1000px;
    padding: 50px;
  }

  .anticon-close {
    display: none;
  }

  .ant-modal-footer {
    border-top: 0;
  }

  .ant-btn-default {
    display: none;
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
