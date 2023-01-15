import styled from "@emotion/styled";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div`
  padding-top: 180px;
  width: 1000px;
  margin: 0 auto;
`;

export const EventsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  gap: 20px;
`;

export const EventCard = styled.div`
  width: 320px;
  height: 320px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  position: relative;
  cursor: pointer;
`;

export const EventCardInnerWrap = styled.div`
  /* padding: 10px; */
`;

export const EventTitle = styled.div`
  text-align: center;
  padding-bottom: 10px;
  position: absolute;
  top: 10px;
`;

export const EventImgBox = styled.div``;

export const EventImg = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
`;

export const EventDetailImg = styled.img`
  /* width: 320px;
  height: 320px; */
  object-fit: cover;
  width: 800px;
  height: 2626px;
  margin: auto;
`;

export const EventBtn = styled.button`
  width: 100%;
  padding: 10px 0;
  margin-top: 10px;
  border-radius: 4px;
  background-color: #f5efe3;
  cursor: pointer;
`;
