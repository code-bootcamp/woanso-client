import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.4rem;
  padding-bottom: 1.4rem;
  border-bottom: 1px solid #c0c0c0;
`;

export const LeftContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`;

export const StarBox = styled.div`
  margin-bottom: 0.5rem;
`;

export const RightContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const ReviewContent = styled.div`
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: #333333;
`;

export const ReviewInfo = styled.div`
  width: 100%;
`;

export const Reviewer = styled.p`
  font-size: 0.875rem;
  color: #333333;
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const CreatedAt = styled.p`
  font-size: 0.875rem;
  color: #999999;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 44px;
  gap: 16px;
`;

export const Button = styled.div`
  cursor: pointer;
  width: 14px;
  height: 14px;

  img {
    width: 100%;
  }
`;
