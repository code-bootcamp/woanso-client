import styled from "@emotion/styled";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div`
  padding: 100px;
  text-align: center;
`;

export const PageTitle = styled.p`
  font-size: 36px;
  padding-bottom: 50px;
`;

export const Point = styled.span`
  color: #77170d;
`;

export const EventsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 15px;
`;

export const EventCard = styled.div`
  width: 44.9%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 4px;
`;

export const EventCardInnerWrap = styled.div`
  padding: 10px;
`;

export const EventTitle = styled.div`
  text-align: center;
  padding-bottom: 10px;
`;

export const EventImgBox = styled.div``;

export const EventImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const EventBtn = styled.button`
  width: 100%;
  padding: 10px 0;
  margin-top: 10px;
  border-radius: 4px;
  background-color: #f5efe3;
  cursor: pointer;
`;
