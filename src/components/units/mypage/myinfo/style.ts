import styled from "@emotion/styled";

export const MyInfoWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const TopWrap = styled.div`
  width: 100%;
  height: 230px;
  padding: 25px 0;
  display: flex;
  border-bottom: 1px solid rgba(205, 205, 205, 0.7);
`;

export const ItemWrap = styled.div`
  width: calc(100% / 3);
  height: 100%;
  border-left: 1px solid rgba(205, 205, 205, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;

  :first-child {
    border: none;
  }
`;

export const TopTitle = styled.p`
  padding-bottom: 15px;
  font-size: 0.875rem;
  font-weight: bold;
`;

export const TopInfo = styled.p`
  font-size: 1rem;
  font-weight: bold;
  padding-top: 15px;
`;

export const BigText = styled.p`
  font-size: 2rem;
  line-height: 100px;
  font-weight: bold;
`;

export const GradeImg = styled.img`
  width: 60px;
`;

export const PointImg = styled.img`
  width: 60px;
`;

export const BottomWrap = styled.div`
  width: 100%;
  height: 320px;
  padding: 50px 40px;
`;

export const Title = styled.p`
  font-weight: bold;
  color: #77170d;
  margin-bottom: 10px;
`;

export const PostingListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
`;

export const PostingWrap = styled.div`
  width: 130px;
  height: 130px;
  background-color: #d9d9d9;
  cursor: pointer;
`;

export const PostingImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
