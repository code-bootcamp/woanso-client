import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.4rem;
`;

export const LeftContainer = styled.div`
  width: 16%;
`;

export const StarBox = styled.div`
  margin-top: 1rem;
`;

export const RightContainer = styled.div`
  width: 84%;
  position: relative;
`;

export const ReviewContent = styled.div`
  margin: 0.6rem;
  font-size: 1.3rem;
`;

export const ReviewInfo = styled.div`
  width: 100%;
  margin: 0.7rem;
  display: flex;
  gap: 1.5rem;
`;

export const Reviewer = styled.div``;

export const CreatedAt = styled.div``;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 20px;
  position: absolute;
  top: 16px;
  right: 0;
`;

export const Button = styled.button`
  background-color: #f5efe3;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;
