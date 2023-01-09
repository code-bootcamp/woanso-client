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
  width: calc(100% / 4);
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
`;

export const PickListWrap = styled.div`
  display: flex;
`;

export const PickItemWrap = styled.div`
  /* width: calc(100% / 5); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ccc;
`;

export const PickItemImg = styled.img`
  width: 116px;
  height: 116px;
  border-radius: 50%;
  border: 1px solid rgba(205, 205, 205, 0.7);
  margin: 20px 5px;
`;

export const BookName = styled.p`
  font-size: 0.875rem;
  margin-bottom: 8px;
`;
export const BookAuthor = styled.p`
  font-size: 0.875rem;
`;
