import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 1.25rem;
  padding-bottom: 7px;
  border-bottom: 3px solid #555555;
  margin-bottom: 15px;
`;

export const WriteWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 8rem;
  border-radius: 5px;
  padding: 20px;
  resize: none;
`;

export const RateBox = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  p {
    font-weight: bold;
    color: #999999;
    font-size: 0.875rem;
    margin-right: 20px;
  }
`;

export const StarRate = styled(Rate)``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: #77170d;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 0.875rem;
  cursor: pointer;
`;
