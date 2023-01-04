import styled from "@emotion/styled";

export const BookList = styled.div`
  position: relative;
`;

export const BookImgBox = styled.div`
  /* border-top: 5px solid #f9d976;
  border-left: 5px solid #f9d976; */
`;

export const BookImg = styled.img`
  object-fit: cover;
  max-width: 100%;
  height: 17.5rem;
`;
export const BookInfoWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  background-color: rgba(119, 23, 13, 0.8);
  border-radius: 0 0 70% 0;
  box-shadow: rgba(0, 0, 0, 0.7) 2.4px 2.4px 3.2px;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const BookName = styled.h3`
  color: #ffffff;
  text-shadow: 2px 2px 2px black;
  font-size: 28px;
  font-weight: 900;
  line-height: 40px;
`;
